[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / IAlertsClient

# Interface: IAlertsClient

[types](../modules/types.md).IAlertsClient

## Table of contents

### Methods

- [initClient](types.IAlertsClient.md#initclient)
- [queryDetections](types.IAlertsClient.md#querydetections)
- [queryObjects](types.IAlertsClient.md#queryobjects)
- [querySingleObject](types.IAlertsClient.md#querysingleobject)

## Methods

### initClient

▸ **initClient**(`axiosInstance?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axiosInstance?` | `AxiosInstance` |

#### Returns

`void`

___

### queryDetections

▸ **queryDetections**<`T`\>(`aid`, `parser?`, `customModel?`): `Promise`<`T`\>

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

#### Returns

`Promise`<`T`\>

___

### queryObjects

▸ **queryObjects**<`T`\>(`objectFilters`, `parser?`, `customModel?`): `Promise`<`T`\>

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

#### Returns

`Promise`<`T`\>

___

### querySingleObject

▸ **querySingleObject**<`T`\>(`aid`, `parser?`, `customModel?`): `Promise`<`T`\>

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

#### Returns

`Promise`<`T`\>
