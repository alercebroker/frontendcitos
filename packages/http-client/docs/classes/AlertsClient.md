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

▸ `Static` **create**(`config`): `IAlertsClient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ClientConfig` |

#### Returns

`IAlertsClient`

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
| `objectFilters` | `ObjectFilters` |
| `parser?` | [`Parser`](../modules.md#parser)<`listObjectResponse`, `T`\> |
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
| `parser?` | [`Parser`](../modules.md#parser)<`singleObjectResponse`, `T`\> |
| `customModel?` | `Newable`<`T`\> |

#### Returns

`Promise`<`T`\>
