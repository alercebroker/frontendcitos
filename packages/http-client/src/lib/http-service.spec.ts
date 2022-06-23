import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { HttpError } from './error/http-error'
import { isParseError } from './error/parse-error'
import { FailableParser, HttpService } from './http-service'

const mock = new MockAdapter(axios)

type userResponse = {
  users: userType[]
}
type userType = {
  id: number
  name: string
}

function assertNonNullish(value: unknown, message: string) {
  if (value === null || value === undefined) {
    throw Error(message)
  }
}

class User {
  public id!: number
  public name!: string
  constructor(data: userType) {
    this.validateData(data)
    this.id = data.id
    this.name = data.name
  }

  private validateData(data: userType) {
    assertNonNullish(data.id, "id can't be undefined")
    assertNonNullish(data.name, "name can't be undefined")
  }
}

let httpService: HttpService = undefined
let parseTo: FailableParser<userResponse, userType[]>

describe('HttpService', () => {
  beforeEach(() => {
    mock.reset()
    mock.onGet('/users').reply(200, {
      users: [{ id: 1, name: 'John Smith' }],
    })
    mock.onGet('/clientError').reply(400, {
      detail: 'Bad Request',
    })
    mock.onGet('/serverError').reply(500, {
      detail: 'Server Error',
    })
    mock.onGet('/timeout').timeout()
    mock.onGet('/networkError').networkError()
    mock.onGet('/parseError').reply(200, {
      users: [{ id: 1, lastName: 'Smith' }],
    })
    httpService = new HttpService('baseUrl')
    parseTo = (rawData: userResponse): userType[] => {
      const userArray = []
      rawData.users.forEach((user) => {
        userArray.push(new User({ id: user.id, name: user.name }))
      })
      return userArray
    }
  })
  describe('GET', () => {
    test('get /users should return parsed data', async () => {
      const result = await httpService.get(
        { url: '/users', config: {} },
        { parseTo }
      )
      expect(result[0].id).toBe(1)
    })
    test('get /users should throw error if request fails with clientError', async () => {
      expect.assertions(3)
      try {
        await httpService.get({ url: '/clientError' }, { parseTo })
      } catch (e) {
        expect(e).toBeInstanceOf(HttpError)
        expect(e.status).toBe(400)
        expect(e.detail.detail).toBe('Bad Request')
      }
    })
    test('get /users should throw error if request fails with serverError', async () => {
      expect.assertions(3)
      try {
        await httpService.get({ url: '/serverError' }, { parseTo })
      } catch (e) {
        expect(e).toBeInstanceOf(HttpError)
        expect(e.status).toBe(500)
        expect(e.detail.detail).toBe('Server Error')
      }
    })
    test('get /users should throw error if request fails with timeout', async () => {
      expect.assertions(2)
      try {
        await httpService.get({ url: '/timeout' }, { parseTo })
      } catch (e) {
        expect(e).toBeInstanceOf(HttpError)
        expect(e.status).toBe(408)
      }
    })
    test('get /users should throw error if request fails with network error', async () => {
      expect.assertions(2)
      try {
        await httpService.get({ url: '/networkError' }, { parseTo })
      } catch (e) {
        expect(e).toBeInstanceOf(Error)
        expect(e).not.toBeInstanceOf(HttpError)
      }
    })
    test("get /users should throw error response can't be parsed", async () => {
      expect.assertions(1)
      try {
        await httpService.get({ url: '/parseError' }, { parseTo })
      } catch (e) {
        expect(isParseError(e)).toBeTruthy()
      }
    })
  })
})
