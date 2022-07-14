[@alercebroker/http-client](../README.md) / [Exports](../modules.md) / IAlertsClient

# Interface: IAlertsClient

## Table of contents

### Methods

- [queryObjects](IAlertsClient.md#queryobjects)
- [querySingleObject](IAlertsClient.md#querysingleobject)

## Methods

### queryObjects

▸ **queryObjects**<`T`\>(`objectFilters`, `parser?`, `customModel?`): `Promise`<`T`\>

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

▸ **querySingleObject**<`T`\>(`aid`, `parser?`, `customModel?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `aid` | `string` |
| `parser?` | [`Parser`](../modules.md#parser)<[`singleObjectResponse`](singleObjectResponse.md), `T`\> |
| `customModel?` | `Newable`<`T`\> |

#### Returns

`Promise`<`T`\>
