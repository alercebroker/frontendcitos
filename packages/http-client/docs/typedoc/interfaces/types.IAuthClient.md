[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / IAuthClient

# Interface: IAuthClient

[types](../modules/types.md).IAuthClient

## Table of contents

### Methods

- [getOAuthURL](types.IAuthClient.md#getoauthurl)
- [initClient](types.IAuthClient.md#initclient)
- [signIn](types.IAuthClient.md#signin)
- [signInOAuth2](types.IAuthClient.md#signinoauth2)
- [verifySession](types.IAuthClient.md#verifysession)

## Methods

### getOAuthURL

▸ **getOAuthURL**(`callbackUrl`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackUrl` | `string` |

#### Returns

`Promise`<`string`\>

___

### initClient

▸ **initClient**(`axiosInstance?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axiosInstance?` | `AxiosInstance` |

#### Returns

`void`

___

### signIn

▸ **signIn**(`credentials?`): `Promise`<[`SessionTokens`](../modules/types.md#sessiontokens)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials?` | [`Credentials`](../modules/types.md#credentials) |

#### Returns

`Promise`<[`SessionTokens`](../modules/types.md#sessiontokens)\>

___

### signInOAuth2

▸ **signInOAuth2**(`code`, `state`): `Promise`<[`SessionTokens`](../modules/types.md#sessiontokens) & { `user`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `state` | `string` |

#### Returns

`Promise`<[`SessionTokens`](../modules/types.md#sessiontokens) & { `user`: `string`  }\>

___

### verifySession

▸ **verifySession**(`session`): `Promise`<[[`UserSchema`](../modules/types.md#userschema), [`SessionTokens`](../modules/types.md#sessiontokens)]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SessionTokens`](../modules/types.md#sessiontokens) |

#### Returns

`Promise`<[[`UserSchema`](../modules/types.md#userschema), [`SessionTokens`](../modules/types.md#sessiontokens)]\>
