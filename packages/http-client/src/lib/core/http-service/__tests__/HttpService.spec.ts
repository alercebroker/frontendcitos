import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { container, loadContainerModules } from '../../../../container/container'
import { TYPES } from '../../../../container/types'
import { HttpError } from '../../error/http-error'
import { isParseError } from '../../error/parse-error'
import { FailableParser, IHttpService } from '../HttpService'


const axiosInstance = axios.create({
  baseURL: 'test',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})
const mock = new MockAdapter(axiosInstance)
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

let httpService: IHttpService = undefined
let parseTo: FailableParser<userResponse, userType[]>

loadContainerModules()

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
    httpService = container.get<IHttpService>(TYPES.IHttpService)
    httpService.connect('baseUrl', axiosInstance)
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
  describe('setAccessToken', () => {
    test('authorization header is added after setting access token on service instance', async () => {
      expect.assertions(2)
      mock.onGet('/withoutAuthToken').reply((config) => {
        expect(Object.keys(config.headers)).not.toContain('Authorization')
        return [200, { users: [{ id: 1, name: 'Jane Smith' }] }]
      })
      await httpService.get({ url: '/withoutAuthToken' }, { parseTo })

      mock.onGet('/withAuthToken').reply((config) => {
        expect(Object.keys(config.headers)).toContain('Authorization')
        return [200, { users: [{ id: 1, name: 'Jane Smith' }] }]
      })
      httpService.setAccessToken('my-token')
      await httpService.get({ url: '/withAuthToken' }, { parseTo })
    })
  })
})
