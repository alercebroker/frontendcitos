import { isHttpError } from '../../../core/error/http-error'
import { isParseError } from '../../../core/error/parse-error'
import {
  DetectionItem,
  listObjectResponse,
  ObjectFilters,
  singleObjectResponse,
} from '../AlertsClient.types'
import { Parser } from '../../../core/http-service/HttpService.types'
import { AlertsClient } from '../../../..'

/**
 * Custom type that only cares about aid
 * */
type MyCustomObject = {
  objects: { aid: string }[]
}

class MyCustomClass {
  private aid: string[] = []
  constructor(data: listObjectResponse) {
    data.items.forEach((item) => {
      this.aid.push(item.aid)
    })
  }
}

/**
 * Custom parser that takes the alerts api response and converts it to
 * MyCustomObject
 * */
const myCustomParser: Parser<listObjectResponse, MyCustomObject> = {
  parseTo: (objectList) => ({
    objects: objectList.items.map((item) => ({ aid: item.aid })),
  }),
}

export async function exampleQueryObjectsByAid(): Promise<listObjectResponse> {
  const filters: ObjectFilters = {
    aid: ['aid123'],
  }
  try {
    // We avoid using a parser and receive the default api response object
    const result = await AlertsClient.queryObjects<listObjectResponse>(filters)
    // do something with result
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

export async function exampleQueryObjectsWithParser(): Promise<MyCustomObject> {
  const filters: ObjectFilters = {
    aid: [],
  }
  try {
    const result = await AlertsClient.queryObjects<MyCustomObject>(
      filters,
      myCustomParser
    )
    // do something with result
    // console.log(result)
    return result
  } catch (exception) {
    // handle exception
    // console.error(exception)
    throw exception
  }
}

export async function exampleCustomObjectWithClass(): Promise<MyCustomClass> {
  const filters: ObjectFilters = {
    aid: [],
  }
  try {
    const result = await AlertsClient.queryObjects<MyCustomClass>(
      filters,
      null,
      MyCustomClass
    )
    // do something with result
    return result
  } catch (exception) {
    // handle exception
    // console.error(exception)
    throw exception
  }
}

export async function exampleCustomObjectWithoutParser(): Promise<listObjectResponse> {
  const filters: ObjectFilters = {
    aid: [],
  }
  try {
    const result = await AlertsClient.queryObjects<listObjectResponse>(filters)
    // do something with result
    return result
  } catch (exception) {
    // handle exception
    // console.error(exception)
    throw exception
  }
}

export async function exampleQueryObjectsByDate(): Promise<listObjectResponse> {
  const filters: ObjectFilters = {
    firstmjd: [59000, 59030],
    lastmjd: [59100],
  }
  try {
    // We avoid using a parser and receive the default api response object
    const result = await AlertsClient.queryObjects<listObjectResponse>(filters)
    // do something with result
    return result
  } catch (exception) {
    // handle different types of exceptions
    // console.error(exception)
    throw exception
  }
}

export async function exampleQueryObjectsByConesearch(): Promise<listObjectResponse> {
  const filters: ObjectFilters = {
    ra: 100,
    dec: 90,
    radius: 3,
  }
  try {
    // We avoid using a parser and receive the default api response object
    const result = await AlertsClient.queryObjects<listObjectResponse>(filters)
    // do something with result
    return result
  } catch (exception) {
    // handle different types of exceptions
    // console.error(exception)
    throw exception
  }
}

export async function exampleQuerySingleObject(): Promise<singleObjectResponse> {
  const aid = 'aid123'
  try {
    return AlertsClient.querySingleObject<singleObjectResponse>(aid)
  } catch (err) {
    throw err
  }
}

export async function exampleQueryObjectDetections(): Promise<DetectionItem[]> {
  const aid = 'AID321'
  try {
    return AlertsClient.queryDetections<DetectionItem[]>(aid)
  } catch (err) {
    throw err
  }
}
