[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / HttpService

# Class: HttpService

[index](../modules/index.md).HttpService

http service class

## Implements

- [`IHttpService`](../interfaces/types.IHttpService.md)

## Table of contents

### Constructors

- [constructor](index.HttpService.md#constructor)

### Properties

- [accessToken](index.HttpService.md#accesstoken)
- [axiosInstance](index.HttpService.md#axiosinstance)

### Methods

- [\_handleError](index.HttpService.md#_handleerror)
- [\_handleRequest](index.HttpService.md#_handlerequest)
- [\_handleResponse](index.HttpService.md#_handleresponse)
- [\_initializeRequestInterceptor](index.HttpService.md#_initializerequestinterceptor)
- [\_initializeResponseInterceptor](index.HttpService.md#_initializeresponseinterceptor)
- [\_parseFailable](index.HttpService.md#_parsefailable)
- [delete](index.HttpService.md#delete)
- [get](index.HttpService.md#get)
- [initClient](index.HttpService.md#initclient)
- [post](index.HttpService.md#post)
- [put](index.HttpService.md#put)
- [setAccessToken](index.HttpService.md#setaccesstoken)

## Constructors

### constructor

• **new HttpService**()

## Properties

### accessToken

• `Private` **accessToken**: `string`

#### Defined in

[src/lib/core/http-service/HttpService.ts:24](https://github.com/alercebroker/frontendcitos/blob/469c68b/packages/http-client/src/lib/core/http-service/HttpService.ts#L24)

___

### axiosInstance

• `Protected` **axiosInstance**: `AxiosInstance`

#### Defined in

[src/lib/core/http-service/HttpService.ts:23](https://github.com/alercebroker/frontendcitos/blob/469c68b/packages/http-client/src/lib/core/http-service/HttpService.ts#L23)

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
| `parser` | [`FailableParser`](../modules/types.md#failableparser)<`T`, `M`\> |

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
| `__namedParameters` | [`IHttpRequest`](../modules/types.md#ihttprequest) |

#### Returns

`Promise`<`number`\>

#### Implementation of

[IHttpService](../interfaces/types.IHttpService.md).[delete](../interfaces/types.IHttpService.md#delete)

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
| `requestObject` | [`IHttpRequest`](../modules/types.md#ihttprequest) | an object containing url and axios config for the request. |
| `parser` | [`Parser`](../modules/types.md#parser)<`T`, `M`\> | object containing the parser function for the result. |

#### Returns

`Promise`<`M`\>

the parsed data according to the parseTo function.

#### Implementation of

[IHttpService](../interfaces/types.IHttpService.md).[get](../interfaces/types.IHttpService.md#get)

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

[IHttpService](../interfaces/types.IHttpService.md).[initClient](../interfaces/types.IHttpService.md#initclient)

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
| `requestObject` | [`IHttpRequest`](../modules/types.md#ihttprequest) | an object containing url and axios config for the request. |
| `parser` | [`Parser`](../modules/types.md#parser)<`T`, `M`\> | object containing the parser function for the result. |

#### Returns

`Promise`<`M`\>

the parsed data according to the parseTo function.

#### Implementation of

[IHttpService](../interfaces/types.IHttpService.md).[post](../interfaces/types.IHttpService.md#post)

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
| `__namedParameters` | [`IHttpRequest`](../modules/types.md#ihttprequest) |
| `parser` | [`Parser`](../modules/types.md#parser)<`T`, `M`\> |

#### Returns

`Promise`<`M`\>

#### Implementation of

[IHttpService](../interfaces/types.IHttpService.md).[put](../interfaces/types.IHttpService.md#put)

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

[IHttpService](../interfaces/types.IHttpService.md).[setAccessToken](../interfaces/types.IHttpService.md#setaccesstoken)
