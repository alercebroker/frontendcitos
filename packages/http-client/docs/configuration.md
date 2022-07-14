# Configuration

## Configurate a Specialized Client

Configuration of a Specialized Client is done through a [ `ClientConfig` ](interfaces/ClientConfig.html) object.

This object has 2 properties:

- `accessToken`: allows to perform authenticated queries to the API
- `baseUrl`: allows to change the base url of the API, for example to change between staging and production environments

You can create a specialized client instance instead of using its static methods. This is done via the [ `create` ](classes/AlertsClient.md#create) method.

```typescript
const config: ClientConfig = {
  baseUrl: 'https://api.alerce.online/alerts/v2',
  accessToken: 'myToken',
}
const client = AlertsClient.create(config)

client.queryObjects({ aid: ['aid123'] }).then((result: listObjectResponse) => {
  console.log(result.items)
})
```
