[@alercebroker/http-client](../README.md) / [Exports](../modules.md) / HttpService

# Class: HttpService

http service class

## Implements

- [`IHttpService`](../interfaces/IHttpService.md)

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
- [connect](HttpService.md#connect)
- [delete](HttpService.md#delete)
- [get](HttpService.md#get)
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

src/lib/core/http-service/HttpService.ts:62

___

### axiosInstance

• `Protected` **axiosInstance**: `AxiosInstance`

#### Defined in

src/lib/core/http-service/HttpService.ts:61

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
| `accessToken` | `any` |

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
| `parser` | [`FailableParser`](../modules.md#failableparser)<`T`, `M`\> |

#### Returns

`M`

___

### connect

▸ **connect**(`baseUrl`, `axiosInstance?`, `accessToken?`): `void`

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

[IHttpService](../interfaces/IHttpService.md).[connect](../interfaces/IHttpService.md#connect)

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
| `__namedParameters` | [`IHttpRequest`](../modules.md#ihttprequest) |

#### Returns

`Promise`<`number`\>

#### Implementation of

[IHttpService](../interfaces/IHttpService.md).[delete](../interfaces/IHttpService.md#delete)

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
| `requestObject` | [`IHttpRequest`](../modules.md#ihttprequest) | an object containing url and axios config for the request. |
| `parser` | [`Parser`](../modules.md#parser)<`T`, `M`\> | object containing the parser function for the result. |

#### Returns

`Promise`<`M`\>

the parsed data according to the parseTo function.

#### Implementation of

[IHttpService](../interfaces/IHttpService.md).[get](../interfaces/IHttpService.md#get)

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
| `requestObject` | [`IHttpRequest`](../modules.md#ihttprequest) | an object containing url and axios config for the request. |
| `parser` | [`Parser`](../modules.md#parser)<`T`, `M`\> | object containing the parser function for the result. |

#### Returns

`Promise`<`M`\>

the parsed data according to the parseTo function.

#### Implementation of

[IHttpService](../interfaces/IHttpService.md).[post](../interfaces/IHttpService.md#post)

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
| `__namedParameters` | [`IHttpRequest`](../modules.md#ihttprequest) |
| `parser` | [`Parser`](../modules.md#parser)<`T`, `M`\> |

#### Returns

`Promise`<`M`\>

#### Implementation of

[IHttpService](../interfaces/IHttpService.md).[put](../interfaces/IHttpService.md#put)

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

[IHttpService](../interfaces/IHttpService.md).[setAccessToken](../interfaces/IHttpService.md#setaccesstoken)
