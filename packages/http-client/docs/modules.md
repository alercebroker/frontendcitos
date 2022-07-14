[@alercebroker/http-client](README.md) / Exports

# @alercebroker/http-client

## Table of contents

### Classes

- [AlertsClient](classes/AlertsClient.md)
- [HttpError](classes/HttpError.md)
- [HttpService](classes/HttpService.md)
- [ParseError](classes/ParseError.md)

### Interfaces

- [ClientConfig](interfaces/ClientConfig.md)
- [IAlertsClient](interfaces/IAlertsClient.md)
- [IHttpError](interfaces/IHttpError.md)
- [IHttpService](interfaces/IHttpService.md)
- [singleObjectResponse](interfaces/singleObjectResponse.md)

### Type Aliases

- [FailableParser](modules.md#failableparser)
- [IHttpRequest](modules.md#ihttprequest)
- [ObjectFilters](modules.md#objectfilters)
- [Parser](modules.md#parser)
- [listObjectResponse](modules.md#listobjectresponse)
- [objectListItem](modules.md#objectlistitem)

### Functions

- [isHttpError](modules.md#ishttperror)
- [isParseError](modules.md#isparseerror)

## Type Aliases

### FailableParser

Ƭ **FailableParser**<`T`, `M`\>: (`_`: `T`) => `M`

#### Type parameters

| Name |
| :------ |
| `T` |
| `M` |

#### Type declaration

▸ (`_`): `M`

FailableParser type

##### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `T` |

##### Returns

`M`

#### Defined in

src/lib/core/http-service/HttpService.ts:31

___

### IHttpRequest

Ƭ **IHttpRequest**: `Object`

HttpRequest Interface

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config?` | `AxiosRequestConfig` |
| `data?` | `any` |
| `params?` | `any` |
| `url` | `string` |

#### Defined in

src/lib/core/http-service/HttpService.ts:19

___

### ObjectFilters

Ƭ **ObjectFilters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aid?` | `string`[] |
| `count?` | `string` |
| `dec?` | `number` |
| `firstmjd?` | `number`[] |
| `lastmjd?` | `number`[] |
| `ndet?` | `number`[] |
| `oid?` | `string`[] |
| `order_by?` | `string` |
| `order_mode?` | `string` |
| `page?` | `number` |
| `page_size?` | `number` |
| `ra?` | `number` |
| `radius?` | `number` |

#### Defined in

src/lib/clients/alerts/AlertsClient.types.ts:4

___

### Parser

Ƭ **Parser**<`T`, `M`\>: `Object`

parser type

#### Type parameters

| Name |
| :------ |
| `T` |
| `M` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `parseTo` | [`FailableParser`](modules.md#failableparser)<`T`, `M`\> |

#### Defined in

src/lib/core/http-service/HttpService.ts:36

___

### listObjectResponse

Ƭ **listObjectResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `has_next` | `boolean` |
| `has_prev` | `boolean` |
| `items` | [`objectListItem`](modules.md#objectlistitem)[] |
| `next` | `number` |
| `page` | `number` |
| `prev` | `number` |
| `total` | `number` |

#### Defined in

src/lib/clients/alerts/AlertsClient.types.ts:30

___

### objectListItem

Ƭ **objectListItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aid` | `string` |
| `firstmjd` | `number` |
| `lastmjd` | `number` |
| `meandec` | `number` |
| `meanra` | `number` |
| `ndet` | `number` |
| `oid` | `string`[] |

#### Defined in

src/lib/clients/alerts/AlertsClient.types.ts:20

## Functions

### isHttpError

▸ **isHttpError**(`e`): e is HttpError

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Error` |

#### Returns

e is HttpError

___

### isParseError

▸ **isParseError**(`e`): `boolean`

Identifies if object is instance of ParseError

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `Error` | error instance |

#### Returns

`boolean`
