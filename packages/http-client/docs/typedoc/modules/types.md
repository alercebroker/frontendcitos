[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / types

# Module: types

## Table of contents

### References

- [isHttpError](types.md#ishttperror)
- [isParseError](types.md#isparseerror)

### Enumerations

- [HttpStatusCode](../enums/types.HttpStatusCode.md)

### Classes

- [HttpError](../classes/types.HttpError.md)
- [ParseError](../classes/types.ParseError.md)

### Interfaces

- [ClientConfig](../interfaces/types.ClientConfig.md)
- [IAlertsClient](../interfaces/types.IAlertsClient.md)
- [IHttpError](../interfaces/types.IHttpError.md)
- [IHttpService](../interfaces/types.IHttpService.md)

### Type Aliases

- [DetectionItem](types.md#detectionitem)
- [FailableParser](types.md#failableparser)
- [IHttpRequest](types.md#ihttprequest)
- [Newable](types.md#newable)
- [ObjectFilters](types.md#objectfilters)
- [PaginatedListEntity](types.md#paginatedlistentity)
- [Parser](types.md#parser)
- [featuresResponse](types.md#featuresresponse)
- [listObjectResponse](types.md#listobjectresponse)
- [magstatsResponse](types.md#magstatsresponse)
- [objectListItem](types.md#objectlistitem)
- [probabilitiesResponse](types.md#probabilitiesresponse)
- [singleObjectResponse](types.md#singleobjectresponse)
- [xmatchResponse](types.md#xmatchresponse)

## References

### isHttpError

Re-exports [isHttpError](index.md#ishttperror)

___

### isParseError

Re-exports [isParseError](index.md#isparseerror)

## Type Aliases

### DetectionItem

Ƭ **DetectionItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aid` | `string` |
| `candid` | `string` |
| `corrected` | `boolean` |
| `dec` | `number` |
| `e_mag` | `number` |
| `fid` | `number` |
| `has_stamp` | `boolean` |
| `isdiffpos` | `number` |
| `mag` | `number` |
| `mjd` | `number` |
| `oid` | `string` |
| `parent_candid` | `string` |
| `ra` | `number` |
| `rb` | `number` |
| `rbversion` | `string` |
| `step_id_corr` | `string` |
| `tid` | `string` |

#### Defined in

src/lib/clients/alerts/AlertsClient.types.ts:41

___

### FailableParser

Ƭ **FailableParser**<`T`, `M`\>: (`_`: `T`) => `M`

#### Type parameters

| Name |
| :------ |
| `T` |
| `M` |

#### Type declaration

▸ (`_`): `M`

FailableParser type

##### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `T` |

##### Returns

`M`

#### Defined in

src/lib/core/http-service/HttpService.types.ts:18

___

### IHttpRequest

Ƭ **IHttpRequest**: `Object`

HttpRequest Interface

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config?` | `AxiosRequestConfig` |
| `data?` | `any` |
| `params?` | `any` |
| `url` | `string` |

#### Defined in

src/lib/core/http-service/HttpService.types.ts:6

___

### Newable

Ƭ **Newable**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

src/lib/util.types.ts:1

___

### ObjectFilters

Ƭ **ObjectFilters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aid?` | `string`[] |
| `count?` | `string` |
| `dec?` | `number` |
| `firstmjd?` | `number`[] |
| `lastmjd?` | `number`[] |
| `ndet?` | `number`[] |
| `oid?` | `string`[] |
| `order_by?` | `string` |
| `order_mode?` | `string` |
| `page?` | `number` |
| `page_size?` | `number` |
| `ra?` | `number` |
| `radius?` | `number` |

#### Defined in

src/lib/clients/alerts/AlertsClient.types.ts:5

___

### PaginatedListEntity

Ƭ **PaginatedListEntity**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hasNext` | `boolean` |
| `hasPrev` | `boolean` |
| `items` | `T`[] |
| `next` | `number` \| ``null`` |
| `page` | `number` |
| `prev` | `number` \| ``null`` |
| `total` | `number` \| ``null`` |

#### Defined in

src/lib/util.types.ts:3

___

### Parser

Ƭ **Parser**<`T`, `M`\>: `Object`

parser type

#### Type parameters

| Name |
| :------ |
| `T` |
| `M` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `parseTo` | [`FailableParser`](types.md#failableparser)<`T`, `M`\> |

#### Defined in

src/lib/core/http-service/HttpService.types.ts:23

___

### featuresResponse

Ƭ **featuresResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fid` | `number` |
| `name` | `string` |
| `value` | `number` |
| `version` | `string` |

#### Defined in

src/lib/clients/alerts/AlertsClient.types.ts:90

___

### listObjectResponse

Ƭ **listObjectResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `has_next` | `boolean` |
| `has_prev` | `boolean` |
| `items` | [`objectListItem`](types.md#objectlistitem)[] |
| `next` | `number` |
| `page` | `number` |
| `prev` | `number` |
| `total` | `number` |

#### Defined in

src/lib/clients/alerts/AlertsClient.types.ts:31

___

### magstatsResponse

Ƭ **magstatsResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fid` | `number` |
| `firstmjd` | `number` |
| `ingestion-step` | `string` |
| `lastmjd` | `number` |
| `magfirst` | `number` |
| `maglast` | `number` |
| `magmax` | `number` |
| `magmean` | `number` |
| `magmedian` | `number` |
| `magmin` | `number` |
| `magsigma` | `number` |
| `ndet` | `number` |

#### Defined in

src/lib/clients/alerts/AlertsClient.types.ts:69

___

### objectListItem

Ƭ **objectListItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aid` | `string` |
| `firstmjd` | `number` |
| `lastmjd` | `number` |
| `meandec` | `number` |
| `meanra` | `number` |
| `ndet` | `number` |
| `oid` | `string`[] |

#### Defined in

src/lib/clients/alerts/AlertsClient.types.ts:21

___

### probabilitiesResponse

Ƭ **probabilitiesResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `class_name` | `string` |
| `classifier_name` | `string` |
| `classifier_version` | `string` |
| `probability` | `number` |
| `ranking` | `number` |

#### Defined in

src/lib/clients/alerts/AlertsClient.types.ts:61

___

### singleObjectResponse

Ƭ **singleObjectResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aid` | `string` |
| `features` | [`featuresResponse`](types.md#featuresresponse)[] |
| `firstmjd` | `number` |
| `lastmjd` | `number` |
| `magstats` | [`magstatsResponse`](types.md#magstatsresponse)[] |
| `meandec` | `number` |
| `meanra` | `number` |
| `ndet` | `number` |
| `oid` | `string`[] |
| `probabilities` | [`probabilitiesResponse`](types.md#probabilitiesresponse)[] |
| `xmatch` | [`xmatchResponse`](types.md#xmatchresponse)[] |

#### Defined in

src/lib/clients/alerts/AlertsClient.types.ts:97

___

### xmatchResponse

Ƭ **xmatchResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `catid` | `string` |
| `dist` | `number` |
| `oid_catalog` | `string` |

#### Defined in

src/lib/clients/alerts/AlertsClient.types.ts:84
