[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / AlertsClient

# Class: AlertsClient

[index](../modules/index.md).AlertsClient

## Table of contents

### Constructors

- [constructor](index.AlertsClient.md#constructor)

### Methods

- [create](index.AlertsClient.md#create)
- [getClientConfig](index.AlertsClient.md#getclientconfig)
- [queryDetections](index.AlertsClient.md#querydetections)
- [queryObjects](index.AlertsClient.md#queryobjects)
- [querySingleObject](index.AlertsClient.md#querysingleobject)

## Constructors

### constructor

• **new AlertsClient**()

## Methods

### create

▸ `Static` **create**(`config`): [`IAlertsClient`](../interfaces/types.IAlertsClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ClientConfig`](../interfaces/types.ClientConfig.md) |

#### Returns

[`IAlertsClient`](../interfaces/types.IAlertsClient.md)

___

### getClientConfig

▸ `Static` **getClientConfig**(): [`ClientConfig`](../interfaces/types.ClientConfig.md)

#### Returns

[`ClientConfig`](../interfaces/types.ClientConfig.md)

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
| `parser?` | [`Parser`](../modules/types.md#parser)<[`DetectionItem`](../modules/types.md#detectionitem)[], `T`\> |
| `customModel?` | [`Newable`](../modules/types.md#newable)<`T`\> |
| `config?` | [`ClientConfig`](../interfaces/types.ClientConfig.md) |

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
| `objectFilters` | [`ObjectFilters`](../modules/types.md#objectfilters) |
| `parser?` | [`Parser`](../modules/types.md#parser)<[`listObjectResponse`](../modules/types.md#listobjectresponse), `T`\> |
| `customModel?` | [`Newable`](../modules/types.md#newable)<`T`\> |
| `config?` | [`ClientConfig`](../interfaces/types.ClientConfig.md) |

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
| `parser?` | [`Parser`](../modules/types.md#parser)<[`singleObjectResponse`](../modules/types.md#singleobjectresponse), `T`\> |
| `customModel?` | [`Newable`](../modules/types.md#newable)<`T`\> |
| `config?` | [`ClientConfig`](../interfaces/types.ClientConfig.md) |

#### Returns

`Promise`<`T`\>
