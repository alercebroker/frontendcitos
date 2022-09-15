[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / StampsClient

# Class: StampsClient

[index](../modules/index.md).StampsClient

## Table of contents

### Constructors

- [constructor](index.StampsClient.md#constructor)

### Methods

- [create](index.StampsClient.md#create)
- [getAvroJson](index.StampsClient.md#getavrojson)
- [getStamp](index.StampsClient.md#getstamp)

## Constructors

### constructor

• **new StampsClient**()

## Methods

### create

▸ `Static` **create**(`config`): [`IStampsClient`](../interfaces/types.IStampsClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`StampsClientConfig`](../modules/types.md#stampsclientconfig) |

#### Returns

[`IStampsClient`](../interfaces/types.IStampsClient.md)

___

### getAvroJson

▸ `Static` **getAvroJson**<`T`\>(`params`, `parser?`, `customModel?`, `config?`): `Promise`<`T`\>

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
| `config?` | [`StampsClientConfig`](../modules/types.md#stampsclientconfig) |

#### Returns

`Promise`<`T`\>

___

### getStamp

▸ `Static` **getStamp**<`T`\>(`params`, `parser?`, `config?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetAvroParams`](../modules/types.md#getavroparams) |
| `parser?` | [`Parser`](../modules/types.md#parser)<`Blob`, `T`\> |
| `config?` | [`StampsClientConfig`](../modules/types.md#stampsclientconfig) |

#### Returns

`Promise`<`T`\>
