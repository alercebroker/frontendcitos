# Getting Started

The easiest way to use this package is through the [Specialized Clients](./specialized-clients.md).

We make a call to `AlertsClient.queryObjects` and pass a filter that uses aid to fetch matching objects.

In the case of an error we use an error handler defined below

```typescript
async function exampleQueryObjectsByAid(): Promise<customType[]> {
  const filters: ObjectFilters = {
    aid: ['aid123'],
  }
  try {
    const result = await AlertsClient.queryObjects<customType[]>(
      filters,
      customParser
    )
    return result
  } catch (exception) {
    if (isHttpError(exception)) {
      handleHttpError(exception)
    } else if (isParseError(exception)) {
      handleParseError(exception)
    } else {
      throw exception
    }
    throw exception
  }
}
```

We define a custom type and a parser that will transform the API result which is a `listObjectResponse` to our custom type.

```typescript
type customType = {
  aid: string
  firstmjd: number
  ra: number
  dec: number
}

const customParser = {
  parseTo: (listObjectResponse): customType[] => {
    return listObjectResponse.items.map(
      (item): customType => ({
        aid: item.aid,
        firstmjd: item.firstmjd,
        ra: item.meanra,
        dec: item.meandec,
      })
    )
  },
}
```

Optionally, if we do not use a parser, the result will be the same `listObjectResponse`

Finally we can use error handler functions to deal with the different type of errors. In this case we will set an hypothetical global state with the error detail.

```typescript
function handleHttpError(error: HttpError) {
  if (error.isClientError) {
    globalState.setError(error.detail)
    // a component may react to error details and display to the user
  }
  if (error.isServerError) {
    alert('External Server Error')
  }
}

function handleParseError(error: ParseError) {
  console.log('Parse Error', error)
}
```
