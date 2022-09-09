[@alercebroker/http-client](../README.md) / [Exports](../modules.md) / AlertsClient

# Class: AlertsClient

## Table of contents

### Constructors

- [constructor](AlertsClient.md#constructor)

### Methods

- [create](AlertsClient.md#create)
- [getClientConfig](AlertsClient.md#getclientconfig)
- [queryDetections](AlertsClient.md#querydetections)
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

### getClientConfig

▸ `Static` **getClientConfig**(): `ClientConfig`

#### Returns

`ClientConfig`

___

### queryDetections

▸ `Static` **queryDetections**<`T`\>(`aid`, `parser?`, `customModel?`, `config?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `aid` | `string` |
| `parser?` | `Parser`<`DetectionItem`[], `T`\> |
| `customModel?` | `Newable`<`T`\> |
| `config?` | `ClientConfig` |

#### Returns

`Promise`<`T`\>

___

### queryObjects

▸ `Static` **queryObjects**<`T`\>(`objectFilters`, `parser?`, `customModel?`, `config?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectFilters` | `ObjectFilters` |
| `parser?` | `Parser`<`listObjectResponse`, `T`\> |
| `customModel?` | `Newable`<`T`\> |
| `config?` | `ClientConfig` |

#### Returns

`Promise`<`T`\>

___

### querySingleObject

▸ `Static` **querySingleObject**<`T`\>(`aid`, `parser?`, `customModel?`, `config?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `aid` | `string` |
| `parser?` | `Parser`<`singleObjectResponse`, `T`\> |
| `customModel?` | `Newable`<`T`\> |
| `config?` | `ClientConfig` |

#### Returns

`Promise`<`T`\>
