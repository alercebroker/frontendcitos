import { Given, When, Then } from '@cucumber/cucumber'
import { strict } from 'assert'
import { container } from '../../../../../../container/container'
import { TYPES } from '../../../../../../container/types'
import { Avro } from '../../../../../../types'
import { HttpServiceStampsMocks } from '../../../../../core/http-service/__mocks__/HttpServiceStamps.mock'
import { exampleGetAvroJson } from '../../../__examples__/StampsClient.example'

Given('the candid exists', () => {
  container.rebind('testType').toConstantValue('success')
  container.rebind(TYPES.IHttpService).to(HttpServiceStampsMocks)
})

When('I make a call to getAvroJson', async function () {
  try {
    const result = await exampleGetAvroJson()
    this.result = result
  } catch (exception) {
    this.err = exception
  }
})

Then('I should get a response with the avro info', function () {
  const result: Avro = this.result
  strict.equal(result.candidate.candid, '123456')
})

Given('the candid does not exist', function () {
  container.rebind('testType').toConstantValue('clientError')
  container.rebind(TYPES.IHttpService).to(HttpServiceStampsMocks)
})

Then('I should get an error response', function () {
  strict.equal(this.err.status, 404)
})
