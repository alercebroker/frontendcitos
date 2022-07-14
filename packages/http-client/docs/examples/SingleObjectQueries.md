# Single Object Queries

```typescript
async function exampleQuerySingleObject(): Promise<singleObjectResponse> {
  const aid = 'aid123'
  try {
    return await AlertsClient.querySingleObject<singleObjectResponse>(aid)
  } catch (err) {
    throw err
  }
}
```

### Provide a custom parser

You can transform the response to another type of object using a custom parser.

```typescript
type MyCustomObject = {
  aid: string
  mjd: number
  ra: number
  dec: number
}

const myCustomParser: Parser<singleObjectResponse, MyCustomObject> = {
  parseTo: (obj) => ({
    aid: obj.aid,
    mjd: obj.firstmjd,
    ra: obj.meanra,
    dec: obj.meandec,
  }),
}

export async function exampleQuerySingleObjectWithParser(): Promise<MyCustomObject> {
  try {
    const result = await AlertsClient.querySingleObject<MyCustomObject>(
      'aid123'
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

You can also transform the response to a custom model and without a parser. But you must make sure that the class takes the `singleObjectResponse` type as first argument in the constructor.

```typescript
class MyCustomClass {
  private aid: string
  constructor(data: singleObjectResponse) {
    this.aid = data.aid
  }
}

export async function exampleCustomObjectWithClass(): Promise<MyCustomClass> {
  try {
    const result = await AlertsClient.querySingleObject<MyCustomClass>(
      'aid123',
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
