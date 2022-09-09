[@alercebroker/http-client](README.md) / Exports

# @alercebroker/http-client

## Table of contents

### Classes

- [AlertsClient](classes/AlertsClient.md)
- [AuthClient](classes/AuthClient.md)
- [HttpService](classes/HttpService.md)

### Functions

- [isHttpError](modules.md#ishttperror)
- [isParseError](modules.md#isparseerror)
- [serializeParams](modules.md#serializeparams)
- [serializeParamsReverse](modules.md#serializeparamsreverse)

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

___

### serializeParams

▸ **serializeParams**(`params`, `args?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |
| `args?` | `any` |

#### Returns

`string`

___

### serializeParamsReverse

▸ **serializeParamsReverse**(`queryString`, `args?`): `ParsedQs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryString` | `string` |
| `args?` | `any` |

#### Returns

`ParsedQs`
