import { Given, Then, When } from '@cucumber/cucumber'
import { strict } from 'assert'
import { container } from '../../../../../../container/container'
import { TYPES } from '../../../../../../container/types'
import { HttpServiceAuthMocks } from '../../../../../core/http-service/__mocks__/HttpServiceAuth.mock'
import { SessionTokens, UserSchema } from '../../../AuthClient.types'
import {
  exampleCurrentUser,
  exampleCredentialsLogin,
} from '../../../__examples__/AuthClient.example'

Given('the users API responds with success', () => {
  container.rebind('testType').toConstantValue('success')
  container.rebind(TYPES.IHttpService).to(HttpServiceAuthMocks)
})

When('I make a call to current user', async function () {
  try {
    const result = await exampleCurrentUser()
    this.result = result
  } catch (err) {
    this.err = err
  }
})

Then('I should get an user object', function () {
  const user: UserSchema = this.result
  strict.equal(user.username, 'elpeter')
})

When(
  'I make a request to login with valid username and password',
  async function () {
    try {
      const result = await exampleCredentialsLogin()
      this.result = result
    } catch (err) {
      this.err = err
    }
  }
)

Then('I should get an access and refresh token', function () {
  const tokens: SessionTokens = this.result
  strict.equal(tokens.access, 'eyeyey')
})
