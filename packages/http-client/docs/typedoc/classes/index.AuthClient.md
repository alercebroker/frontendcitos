[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / AuthClient

# Class: AuthClient

[index](../modules/index.md).AuthClient

## Table of contents

### Constructors

- [constructor](index.AuthClient.md#constructor)

### Methods

- [create](index.AuthClient.md#create)
- [signIn](index.AuthClient.md#signin)
- [verifySession](index.AuthClient.md#verifysession)

## Constructors

### constructor

• **new AuthClient**()

## Methods

### create

▸ `Static` **create**(`config`): `IAuthClient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ClientConfig`](../interfaces/types.ClientConfig.md) |

#### Returns

`IAuthClient`

___

### signIn

▸ `Static` **signIn**(`credentials`, `config?`): `Promise`<`SessionTokens`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials` | `Credentials` |
| `config?` | [`ClientConfig`](../interfaces/types.ClientConfig.md) |

#### Returns

`Promise`<`SessionTokens`\>

___

### verifySession

▸ `Static` **verifySession**(`session`, `config?`): `Promise`<`UserSchema`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | `SessionTokens` |
| `config?` | [`ClientConfig`](../interfaces/types.ClientConfig.md) |

#### Returns

`Promise`<`UserSchema`\>
