# Base Client

The base client is a lower level, generic HTTP client that allows to perform queries and parse the result in the same operation. It uses [ Axios ](https://axios-http.com/) to perform HTTP requests so most of the underlying interfaces are from Axios package.

This client is aimed to ease the code boilerplate for the most common use cases within the ALeRCE apps.

## Features

- Authenticated queries by setting an access token
- Built in refresh token functionality (TODO)
- Better error handling
- Parse the query results with a custom parser
- Extend axios functionality by passing a previously configured axios instance

### Example usage

```typescript
 import { HttpService } from 'http-client
 const client = new HttpService('https://api.alerce.online/alerts/v2/')
 const parseTo = (response) => {
   return {
     oid: response.objectId,
     ra: response.meanRa,
     dec: response.meanDec,
   }
 }
 const filterParams = { ra: 37, dec: -14, radius: 3 }
 const result = await client.get(
   { url: '/objects', config: { params: filterParams } },
   { parseTo }
 )
```

You can make any request to be authenticated by providing an access token, which makes any new request to have an authentication header like this: `{ Authorization: 'Bearer ' + accessToken }`

```typescript
client.setAccessToken('myToken')
const result = await client.get(
  { url: '/objects', config: { params: filterParams } },
  { parseTo }
)
```
