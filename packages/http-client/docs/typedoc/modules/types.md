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
- [IAuthClient](../interfaces/types.IAuthClient.md)
- [IHttpError](../interfaces/types.IHttpError.md)
- [IHttpService](../interfaces/types.IHttpService.md)
- [IStampsClient](../interfaces/types.IStampsClient.md)

### Type Aliases

- [AuthClientConfig](types.md#authclientconfig)
- [Avro](types.md#avro)
- [Credentials](types.md#credentials)
- [DetectionItem](types.md#detectionitem)
- [FailableParser](types.md#failableparser)
- [GetAvroParams](types.md#getavroparams)
- [IHttpRequest](types.md#ihttprequest)
- [Newable](types.md#newable)
- [ObjectFilters](types.md#objectfilters)
- [PaginatedListEntity](types.md#paginatedlistentity)
- [Parser](types.md#parser)
- [SessionTokens](types.md#sessiontokens)
- [StampsClientConfig](types.md#stampsclientconfig)
- [UserSchema](types.md#userschema)
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

### AuthClientConfig

Ƭ **AuthClientConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accessToken?` | `string` |
| `baseUrl?` | `string` |
| `headers?` | { `Content-Type`: `string`  } |
| `headers.Content-Type` | `string` |
| `withCredentials` | `boolean` |

#### Defined in

[src/lib/clients/authentication/AuthClient.types.ts:14](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/authentication/AuthClient.types.ts#L14)

___

### Avro

Ƭ **Avro**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `candidate` | `Record`<`string`, `string` \| `number`\> |

#### Defined in

[src/lib/clients/stamps/StampsClient.types.ts:4](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/stamps/StampsClient.types.ts#L4)

___

### Credentials

Ƭ **Credentials**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `username` | `string` |

#### Defined in

[src/lib/clients/authentication/AuthClient.types.ts:9](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/authentication/AuthClient.types.ts#L9)

___

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

[src/lib/clients/alerts/AlertsClient.types.ts:41](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/alerts/AlertsClient.types.ts#L41)

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

[src/lib/core/http-service/HttpService.types.ts:18](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/http-service/HttpService.types.ts#L18)

___

### GetAvroParams

Ƭ **GetAvroParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `candid` | `string` |
| `survey_id` | `string` |

#### Defined in

[src/lib/clients/stamps/StampsClient.types.ts:12](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/stamps/StampsClient.types.ts#L12)

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

[src/lib/core/http-service/HttpService.types.ts:6](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/http-service/HttpService.types.ts#L6)

___

### Newable

Ƭ **Newable**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/lib/util.types.ts:1](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/util.types.ts#L1)

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

[src/lib/clients/alerts/AlertsClient.types.ts:5](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/alerts/AlertsClient.types.ts#L5)

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

[src/lib/util.types.ts:3](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/util.types.ts#L3)

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

[src/lib/core/http-service/HttpService.types.ts:23](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/http-service/HttpService.types.ts#L23)

___

### SessionTokens

Ƭ **SessionTokens**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access` | `string` |
| `refresh` | `string` |

#### Defined in

[src/lib/clients/authentication/AuthClient.types.ts:4](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/authentication/AuthClient.types.ts#L4)

___

### StampsClientConfig

Ƭ **StampsClientConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `baseUrl` | `string` |

#### Defined in

[src/lib/clients/stamps/StampsClient.types.ts:8](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/stamps/StampsClient.types.ts#L8)

___

### UserSchema

Ƭ **UserSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `email` | `string` |
| `id` | `number` |
| `institution` | `string` |
| `last_name` | `string` |
| `name` | `string` |
| `research_group` | `string` |
| `role` | `string` |
| `username` | `string` |

#### Defined in

[src/lib/clients/authentication/AuthClient.types.ts:23](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/authentication/AuthClient.types.ts#L23)

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

[src/lib/clients/alerts/AlertsClient.types.ts:90](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/alerts/AlertsClient.types.ts#L90)

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

[src/lib/clients/alerts/AlertsClient.types.ts:31](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/alerts/AlertsClient.types.ts#L31)

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

[src/lib/clients/alerts/AlertsClient.types.ts:69](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/alerts/AlertsClient.types.ts#L69)

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

[src/lib/clients/alerts/AlertsClient.types.ts:21](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/alerts/AlertsClient.types.ts#L21)

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

[src/lib/clients/alerts/AlertsClient.types.ts:61](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/alerts/AlertsClient.types.ts#L61)

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

[src/lib/clients/alerts/AlertsClient.types.ts:97](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/alerts/AlertsClient.types.ts#L97)

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

[src/lib/clients/alerts/AlertsClient.types.ts:84](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/clients/alerts/AlertsClient.types.ts#L84)
