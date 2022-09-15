[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / AuthClient

# Class: AuthClient

[index](../modules/index.md).AuthClient

## Table of contents

### Constructors

- [constructor](index.AuthClient.md#constructor)

### Methods

- [create](index.AuthClient.md#create)
- [getOAuth2Url](index.AuthClient.md#getoauth2url)
- [signIn](index.AuthClient.md#signin)
- [signInWithOAuth2](index.AuthClient.md#signinwithoauth2)
- [verifySession](index.AuthClient.md#verifysession)

## Constructors

### constructor

• **new AuthClient**()

## Methods

### create

▸ `Static` **create**(`config`): [`IAuthClient`](../interfaces/types.IAuthClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AuthClientConfig`](../modules/types.md#authclientconfig) |

#### Returns

[`IAuthClient`](../interfaces/types.IAuthClient.md)

___

### getOAuth2Url

▸ `Static` **getOAuth2Url**(`callbackUrl`, `config?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackUrl` | `string` |
| `config?` | [`AuthClientConfig`](../modules/types.md#authclientconfig) |

#### Returns

`Promise`<`string`\>

___

### signIn

▸ `Static` **signIn**(`credentials`, `config?`): `Promise`<[`SessionTokens`](../modules/types.md#sessiontokens)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials` | [`Credentials`](../modules/types.md#credentials) |
| `config?` | [`AuthClientConfig`](../modules/types.md#authclientconfig) |

#### Returns

`Promise`<[`SessionTokens`](../modules/types.md#sessiontokens)\>

___

### signInWithOAuth2

▸ `Static` **signInWithOAuth2**(`code`, `state`, `config?`): `Promise`<[`SessionTokens`](../modules/types.md#sessiontokens) & { `user`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `state` | `string` |
| `config?` | [`AuthClientConfig`](../modules/types.md#authclientconfig) |

#### Returns

`Promise`<[`SessionTokens`](../modules/types.md#sessiontokens) & { `user`: `string`  }\>

___

### verifySession

▸ `Static` **verifySession**(`session`, `config?`): `Promise`<[[`UserSchema`](../modules/types.md#userschema), [`SessionTokens`](../modules/types.md#sessiontokens)]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SessionTokens`](../modules/types.md#sessiontokens) |
| `config?` | [`AuthClientConfig`](../modules/types.md#authclientconfig) |

#### Returns

`Promise`<[[`UserSchema`](../modules/types.md#userschema), [`SessionTokens`](../modules/types.md#sessiontokens)]\>
