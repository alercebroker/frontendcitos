[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / index

# Module: index

## Table of contents

### Classes

- [AlertsClient](../classes/index.AlertsClient.md)
- [AuthClient](../classes/index.AuthClient.md)
- [HttpService](../classes/index.HttpService.md)
- [StampsClient](../classes/index.StampsClient.md)

### Functions

- [isHttpError](index.md#ishttperror)
- [isParseError](index.md#isparseerror)
- [serializeParams](index.md#serializeparams)
- [serializeParamsReverse](index.md#serializeparamsreverse)

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
