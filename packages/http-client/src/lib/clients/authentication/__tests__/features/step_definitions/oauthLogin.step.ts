import { When, Then } from '@cucumber/cucumber'
import { strict } from 'assert'
import { SessionTokens } from '../../../AuthClient.types'
import {
  exampleGetOauthUrl,
  exampleOauthLogin,
} from '../../../__examples__/AuthClient.example'

When('I make a call to the social endpoint', async function () {
  try {
    const result = await exampleGetOauthUrl()
    this.result = result
  } catch (e) {
    this.err = e
  }
})

Then('I should get an authorization url', function () {
  const url: string = this.result
  strict.equal(url, 'https://oauth.google.com/user')
})

When(
  'I make a call to the endpoint with code and state params',
  async function () {
    try {
      const result = await exampleOauthLogin()
      this.result = result
    } catch (e) {
      this.err = e
    }
  }
)

Then('I should get an access and refresh token from Google', function () {
  const tokens: SessionTokens = this.result
  strict.equal(tokens.access, 'oauth')
})
