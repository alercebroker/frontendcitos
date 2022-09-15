[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / IStampsClient

# Interface: IStampsClient

[types](../modules/types.md).IStampsClient

## Table of contents

### Methods

- [getAvroJson](types.IStampsClient.md#getavrojson)
- [getStamp](types.IStampsClient.md#getstamp)
- [initClient](types.IStampsClient.md#initclient)

## Methods

### getAvroJson

▸ **getAvroJson**<`T`\>(`params`, `parser?`, `customModel?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAvroParams`](../modules/types.md#getavroparams) |
| `parser?` | [`Parser`](../modules/types.md#parser)<[`Avro`](../modules/types.md#avro), `T`\> |
| `customModel?` | [`Newable`](../modules/types.md#newable)<`T`\> |

#### Returns

`Promise`<`T`\>

___

### getStamp

▸ **getStamp**<`T`\>(`params`, `parser`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAvroParams`](../modules/types.md#getavroparams) |
| `parser` | [`Parser`](../modules/types.md#parser)<`Blob`, `T`\> |

#### Returns

`Promise`<`T`\>

___

### initClient

▸ **initClient**(`axiosInstance?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axiosInstance?` | `AxiosInstance` |

#### Returns

`void`
