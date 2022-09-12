import { isHttpError, isParseError, StampsClient } from '../../../..'
import { Parser } from '../../../../types'
import { Avro, GetAvroParams } from '../StampsClient.types'

export async function exampleGetAvroJson(): Promise<Avro> {
  const params: GetAvroParams = {
    candid: '1450198835415015001',
    survey_id: 'ztf',
  }
  try {
    const result = await StampsClient.getAvroJson<Avro>(params)
    return result
  } catch (exception) {
    // handle different types of exceptions
    if (isHttpError(exception)) {
      if (exception.isClientError) {
        // handle client error
        // console.error(exception)
        throw exception
      }
      if (exception.isServerError) {
        // handle server error
        // console.error(exception)
        throw exception
      }
    } else if (isParseError(exception)) {
      // handle parse error
      // console.error(exception)
      throw exception
    } else {
      // handle fallback error
      // console.error(exception)
      throw exception
    }
    throw exception
  }
}

export async function exampleGetStamp(): Promise<Blob> {
  const params: GetAvroParams = {
    candid: '1450198835415015001',
    survey_id: 'ztf',
  }

  try {
    const result = await StampsClient.getStamp<Blob>(params)
    return result
  } catch (exception) {
    throw exception
  }
}

export async function exampleGetStampToUrl(): Promise<string> {
  const params: GetAvroParams = {
    candid: '1450198835415015001',
    survey_id: 'ztf',
  }

  const customParser: Parser<Blob, string> = {
    parseTo: (response) => {
      const url = URL.createObjectURL(response)
      return url
    },
  }

  try {
    const result = await StampsClient.getStamp<string>(params, customParser)
    return result
  } catch (exception) {
    throw exception
  }
}
