# Examples: Object Queries

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [Examples: Object Queries](#examples-object-queries)
- [Query By ALeRCE ID](#query-by-alerce-id)
- [Provide a custom parser](#provide-a-custom-parser)
- [Provide a custom model](#provide-a-custom-model)
- [Query by dates](#query-by-dates)
- [Query by Conesearch](#query-by-conesearch)

<!-- markdown-toc end -->

## Query By ALeRCE ID

```typescript
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
        throw exception
      }
      if (exception.isServerError) {
        // handle server error
        throw exception
      }
    } else if (isParseError(exception)) {
      // handle parse error
      throw exception
    } else {
      // handle fallback error
      throw exception
    }
    throw exception
  }
}
```

### Provide a custom parser

You can transform the response to another type of object using a custom parser.

```typescript
type MyCustomObject = {
  objects: { aid: string }[]
}

const myCustomParser: Parser<listObjectResponse, MyCustomObject> = {
  parseTo: (objectList) => ({
    objects: objectList.items.map((item) => ({ aid: item.aid })),
  }),
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
    return result
  } catch (exception) {
    // handle exception
    throw exception
  }
}
```

### Provide a custom model

You can also transform the response to a custom model and without a parser. But you must make sure that the class takes the `listObjectResponse` type as first argument in the constructor.

```typescript
class MyCustomClass {
  private aid: string[] = []
  constructor(data: listObjectResponse) {
    data.items.forEach((item) => {
      this.aid.push(item.aid)
    })
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
    throw exception
  }
}
```

## Query by dates

```typescript
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
```

## Query by Conesearch

```typescript
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
```
