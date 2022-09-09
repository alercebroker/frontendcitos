[@alercebroker/http-client](../README.md) / [Exports](../modules.md) / AuthClient

# Class: AuthClient

## Table of contents

### Constructors

- [constructor](AuthClient.md#constructor)

### Methods

- [create](AuthClient.md#create)
- [signIn](AuthClient.md#signin)
- [verifySession](AuthClient.md#verifysession)

## Constructors

### constructor

• **new AuthClient**()

## Methods

### create

▸ `Static` **create**(`config`): `IAuthClient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ClientConfig` |

#### Returns

`IAuthClient`

___

### signIn

▸ `Static` **signIn**(`credentials`, `config?`): `Promise`<`SessionTokens`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials` | `Credentials` |
| `config?` | `ClientConfig` |

#### Returns

`Promise`<`SessionTokens`\>

___

### verifySession

▸ `Static` **verifySession**(`session`, `config?`): `Promise`<`UserSchema`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | `SessionTokens` |
| `config?` | `ClientConfig` |

#### Returns

`Promise`<`UserSchema`\>
