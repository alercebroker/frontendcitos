import { When, Then } from '@cucumber/cucumber'
import { strict } from 'assert'
import { Blob } from 'buffer'
import {
  exampleGetStamp,
  exampleGetStampToUrl,
  exampleImportingBase64Parser,
} from '../../../__examples__/StampsClient.example'

When('I make a call to getStamp', async function () {
  try {
    const result = await exampleGetStamp()
    this.result = result
  } catch (exception) {
    console.error(exception)
    this.err = exception
  }
})

When('I make a call to getStamp with an URL parser', async function () {
  try {
    const result = await exampleGetStampToUrl()
    this.result = result
  } catch (exception) {
    this.err = exception
  }
})

When(
  'I make a call to getStamp with the imported base64 parser',
  async function () {
    try {
      const result = await exampleImportingBase64Parser()
      this.result = result
    } catch (exception) {
      this.err = exception
    }
  }
)

Then('I should get a response with a binary object', async function () {
  const result: Blob = this.result
  const b = await result.arrayBuffer()
  const view = new Uint8Array(b)
  strict.equal(view.toString(), '1,2,3,4,5,6,7,8,9')
})

Then('I should get a response with an URL string', function () {
  const result: string = this.result
  strict.ok(result)
})

Then('I should get a response with a base64 string', async function () {
  const result: Promise<string> = this.result
  const realResult = await result
  strict.ok(realResult)
  strict.match(realResult, /data:image\/png;base64,/)
})
