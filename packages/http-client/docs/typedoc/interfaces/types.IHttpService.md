[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / IHttpService

# Interface: IHttpService

[types](../modules/types.md).IHttpService

http service interface

## Implemented by

- [`HttpService`](../classes/index.HttpService.md)

## Table of contents

### Methods

- [delete](types.IHttpService.md#delete)
- [get](types.IHttpService.md#get)
- [initClient](types.IHttpService.md#initclient)
- [post](types.IHttpService.md#post)
- [put](types.IHttpService.md#put)
- [setAccessToken](types.IHttpService.md#setaccesstoken)

## Methods

### delete

▸ **delete**(`request`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`IHttpRequest`](../modules/types.md#ihttprequest) |

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
| `request` | [`IHttpRequest`](../modules/types.md#ihttprequest) |
| `parser` | [`Parser`](../modules/types.md#parser)<`T`, `M`\> |

#### Returns

`Promise`<`M`\>

___

### initClient

▸ **initClient**(`baseUrl`, `axiosInstance?`, `accessToken?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl` | `string` |
| `axiosInstance?` | `AxiosInstance` |
| `accessToken?` | `string` |

#### Returns

`void`

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
| `request` | [`IHttpRequest`](../modules/types.md#ihttprequest) |
| `parser` | [`Parser`](../modules/types.md#parser)<`T`, `M`\> |

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
| `request` | [`IHttpRequest`](../modules/types.md#ihttprequest) |
| `parser` | [`Parser`](../modules/types.md#parser)<`T`, `M`\> |

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
