[@alercebroker/http-client](../README.md) / [Exports](../modules.md) / AlertsClient

# Class: AlertsClient

## Table of contents

### Constructors

- [constructor](AlertsClient.md#constructor)

### Methods

- [create](AlertsClient.md#create)
- [queryObjects](AlertsClient.md#queryobjects)
- [querySingleObject](AlertsClient.md#querysingleobject)

## Constructors

### constructor

• **new AlertsClient**()

## Methods

### create

▸ `Static` **create**(`config`): [`IAlertsClient`](../interfaces/IAlertsClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ClientConfig`](../interfaces/ClientConfig.md) |

#### Returns

[`IAlertsClient`](../interfaces/IAlertsClient.md)

___

### queryObjects

▸ `Static` **queryObjects**<`T`\>(`objectFilters`, `parser?`, `customModel?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectFilters` | [`ObjectFilters`](../modules.md#objectfilters) |
| `parser?` | [`Parser`](../modules.md#parser)<[`listObjectResponse`](../modules.md#listobjectresponse), `T`\> |
| `customModel?` | `Newable`<`T`\> |

#### Returns

`Promise`<`T`\>

___

### querySingleObject

▸ `Static` **querySingleObject**<`T`\>(`aid`, `parser?`, `customModel?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `aid` | `string` |
| `parser?` | [`Parser`](../modules.md#parser)<[`singleObjectResponse`](../interfaces/singleObjectResponse.md), `T`\> |
| `customModel?` | `Newable`<`T`\> |

#### Returns

`Promise`<`T`\>
