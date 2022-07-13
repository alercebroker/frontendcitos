[@alercebroker/http-client](README.md) / Exports

# @alercebroker/http-client

## Table of contents

### Classes

- [AlertsClient](classes/AlertsClient.md)
- [HttpError](classes/HttpError.md)
- [HttpService](classes/HttpService.md)
- [ParseError](classes/ParseError.md)

### Interfaces

- [IHttpService](interfaces/IHttpService.md)

### Type Aliases

- [FailableParser](modules.md#failableparser)
- [IHttpRequest](modules.md#ihttprequest)
- [Parser](modules.md#parser)

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
