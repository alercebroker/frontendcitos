[@alercebroker/http-client](../README.md) / [Exports](../modules.md) / HttpService

# Class: HttpService

http service class

## Implements

- `IHttpService`

## Table of contents

### Constructors

- [constructor](HttpService.md#constructor)

### Properties

- [accessToken](HttpService.md#accesstoken)
- [axiosInstance](HttpService.md#axiosinstance)

### Methods

- [\_handleError](HttpService.md#_handleerror)
- [\_handleRequest](HttpService.md#_handlerequest)
- [\_handleResponse](HttpService.md#_handleresponse)
- [\_initializeRequestInterceptor](HttpService.md#_initializerequestinterceptor)
- [\_initializeResponseInterceptor](HttpService.md#_initializeresponseinterceptor)
- [\_parseFailable](HttpService.md#_parsefailable)
- [delete](HttpService.md#delete)
- [get](HttpService.md#get)
- [initClient](HttpService.md#initclient)
- [post](HttpService.md#post)
- [put](HttpService.md#put)
- [setAccessToken](HttpService.md#setaccesstoken)

## Constructors

### constructor

• **new HttpService**()

## Properties

### accessToken

• `Private` **accessToken**: `string`

#### Defined in

lib/core/http-service/HttpService.ts:24

___

### axiosInstance

• `Protected` **axiosInstance**: `AxiosInstance`

#### Defined in

lib/core/http-service/HttpService.ts:23

## Methods

### \_handleError

▸ `Private` **_handleError**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `AxiosError`<`unknown`, `any`\> |

#### Returns

`void`

___

### \_handleRequest

▸ `Private` **_handleRequest**(`config`, `accessToken`): `AxiosRequestConfig`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `AxiosRequestConfig`<`any`\> |
| `accessToken` | `string` |

#### Returns

`AxiosRequestConfig`<`any`\>

___

### \_handleResponse

▸ `Private` **_handleResponse**(`response`): `AxiosResponse`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `AxiosResponse`<`any`, `any`\> |

#### Returns

`AxiosResponse`<`any`, `any`\>

___

### \_initializeRequestInterceptor

▸ `Private` **_initializeRequestInterceptor**(): `void`

#### Returns

`void`

___

### \_initializeResponseInterceptor

▸ `Private` **_initializeResponseInterceptor**(): `void`

#### Returns

`void`

___

### \_parseFailable

▸ `Private` **_parseFailable**<`T`, `M`\>(`data`, `parser`): `M`

#### Type parameters

| Name |
| :------ |
| `T` |
| `M` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `parser` | `FailableParser`<`T`, `M`\> |

#### Returns

`M`

___

### delete

▸ **delete**<`T`\>(`__namedParameters`): `Promise`<`number`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `IHttpRequest` |

#### Returns

`Promise`<`number`\>

#### Implementation of

IHttpService.delete

___

### get

▸ **get**<`T`, `M`\>(`requestObject`, `parser`): `Promise`<`M`\>

Performs a GET http request and parses the result.

### Example usage
```js
 import { HttpService } from 'http-client
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
```

#### Type parameters

| Name |
| :------ |
| `T` |
| `M` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestObject` | `IHttpRequest` | an object containing url and axios config for the request. |
| `parser` | `Parser`<`T`, `M`\> | object containing the parser function for the result. |

#### Returns

`Promise`<`M`\>

the parsed data according to the parseTo function.

#### Implementation of

IHttpService.get

___

### initClient

▸ **initClient**(`baseUrl`, `axiosInstance?`, `accessToken?`): `void`

http service constructor

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` | base url for axsios instance |
| `axiosInstance?` | `AxiosInstance` | `undefined` | optional axios instance to use instead of creating a new one |
| `accessToken` | `string` | `''` | token for authentication with the API |

#### Returns

`void`

#### Implementation of

IHttpService.initClient

___

### post

▸ **post**<`T`, `M`\>(`requestObject`, `parser`): `Promise`<`M`\>

Performs a POST http request and parses the result.

#### Type parameters

| Name |
| :------ |
| `T` |
| `M` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestObject` | `IHttpRequest` | an object containing url and axios config for the request. |
| `parser` | `Parser`<`T`, `M`\> | object containing the parser function for the result. |

#### Returns

`Promise`<`M`\>

the parsed data according to the parseTo function.

#### Implementation of

IHttpService.post

___

### put

▸ **put**<`T`, `M`\>(`__namedParameters`, `parser`): `Promise`<`M`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `M` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `IHttpRequest` |
| `parser` | `Parser`<`T`, `M`\> |

#### Returns

`Promise`<`M`\>

#### Implementation of

IHttpService.put

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | `string` |

#### Returns

`void`

#### Implementation of

IHttpService.setAccessToken
