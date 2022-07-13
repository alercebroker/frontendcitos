[@alercebroker/http-client](../README.md) / [Exports](../modules.md) / IHttpService

# Interface: IHttpService

http service interface

## Implemented by

- [`HttpService`](../classes/HttpService.md)

## Table of contents

### Methods

- [connect](IHttpService.md#connect)
- [delete](IHttpService.md#delete)
- [get](IHttpService.md#get)
- [post](IHttpService.md#post)
- [put](IHttpService.md#put)
- [setAccessToken](IHttpService.md#setaccesstoken)

## Methods

### connect

▸ **connect**(`baseUrl`, `axiosInstance?`, `accessToken?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl` | `string` |
| `axiosInstance?` | `AxiosInstance` |
| `accessToken?` | `string` |

#### Returns

`void`

___

### delete

▸ **delete**(`request`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`IHttpRequest`](../modules.md#ihttprequest) |

#### Returns

`Promise`<`number`\>

___

### get

▸ **get**<`T`, `M`\>(`request`, `parser`): `Promise`<`M`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `M` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`IHttpRequest`](../modules.md#ihttprequest) |
| `parser` | [`Parser`](../modules.md#parser)<`T`, `M`\> |

#### Returns

`Promise`<`M`\>

___

### post

▸ **post**<`T`, `M`\>(`request`, `parser`): `Promise`<`M`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `M` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`IHttpRequest`](../modules.md#ihttprequest) |
| `parser` | [`Parser`](../modules.md#parser)<`T`, `M`\> |

#### Returns

`Promise`<`M`\>

___

### put

▸ **put**<`T`, `M`\>(`request`, `parser`): `Promise`<`M`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `M` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`IHttpRequest`](../modules.md#ihttprequest) |
| `parser` | [`Parser`](../modules.md#parser)<`T`, `M`\> |

#### Returns

`Promise`<`M`\>

___

### setAccessToken

▸ **setAccessToken**(`accessToken`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | `string` |

#### Returns

`void`
