import { strict } from 'assert'
import { container } from '../../../../../../container/container'
import { Given, When, Then } from '@cucumber/cucumber'
import { TYPES } from '../../../../../../container/types'
import { HttpServiceObjectMocks } from '../../../../../core/http-service/HttpService.mock'
import { listObjectResponse } from '../../../AlertsClient.types'
import {
  exampleQueryObjectsByAid,
  exampleQueryObjectsByConesearch,
  exampleQueryObjectsByDate,
} from '../../../__examples__/AlertsClient.example'
import { isHttpError } from '../../../../../core/error/http-error'

Given('the API responds with success', function () {
  container.rebind('testType').toConstantValue('success')
  container.rebind(TYPES.IHttpService).to(HttpServiceObjectMocks)
})

When('I make a call to queryObjects with aid', async function () {
  try {
    const result = await exampleQueryObjectsByAid()
    this.result = result
  } catch (exception) {
    this.err = exception
  }
})

Then('I should get a list of objects', function () {
  const result: listObjectResponse = this.result
  strict.equal(result.total, 1)
  strict.equal(result.items[0].aid, 'aid123')
})

When('I make a call to queryObjects with date filters', async function () {
  this.result = await exampleQueryObjectsByDate()
})

When('I make a call to queryObjects with coordinate filters', async function () {
  this.result = await exampleQueryObjectsByConesearch()
})

Given('the API responds with error', function () {
  container.rebind('testType').toConstantValue("serverError")
  container.rebind(TYPES.IHttpService).to(HttpServiceObjectMocks)
})

Then('I should get an error', function () {
  strict.ok(isHttpError(this.err))
})
