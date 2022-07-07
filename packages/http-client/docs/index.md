# ALeRCE HTTP JS/TS Client

Perform HTTP requests and parse the response automatically. Use this library for interacting with the ALeRCE API services such as the Alerts API, Stamps API and more.

This package offers a base client that is a convenient wrapper of axios that allows you to make the request and parse the response in a single operation.

```ts
import { HttpService } from 'http-client'
const client = HttpService('https://api.alerce.online/alerts/v1/')
const parseTo = (response) => {
  return {
    oid: response.objectId,
    ra: response.meanRa,
    dec: response.meanDec,
  }
}
const filterParams = { ra: 37, dec: -14 }
const result = await client.get(
  { url: '/objects', config: { params: filterParams } },
  { parseTo }
)
console.log(result)
```

There are also specialized clients that have the most common interactions with the ALeRCE APIs already implemented.

```ts
import { AlertsClient } from 'http-client'
import { MyDetectionModel } from './models/my-detection-model
const client = AlertsClient()
const alerceId = 'AL123abc'
// if MyDetectionModel looks like the API Response, there's no need to pass a parser
const dets = await client.getDetections(alerceId, MyDetectionModel)
// optionally use a parser like this
// client.getDetections(alerceId, MyDetectionModel, myParser)
console.log(dets)
```

This specialized clients make the request and parse the result to your defined model using the specified parser. The advantage of using this instead of the HttpService is that the specialized client has a predefined response model (for type safety) and it can make parsing more directly by inferring the attribute names of the model.

This library is supposed to allow you to save some time by having usable defaults and utils, but it won't force you to use it with the limitations of the default configuration.

## References
