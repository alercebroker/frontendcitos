[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / HttpError

# Class: HttpError

[types](../modules/types.md).HttpError

HttpError class

## Hierarchy

- `Error`

  ↳ **`HttpError`**

## Implements

- [`IHttpError`](../interfaces/types.IHttpError.md)

## Table of contents

### Constructors

- [constructor](types.HttpError.md#constructor)

### Properties

- [detail](types.HttpError.md#detail)
- [message](types.HttpError.md#message)
- [name](types.HttpError.md#name)
- [stack](types.HttpError.md#stack)
- [status](types.HttpError.md#status)
- [prepareStackTrace](types.HttpError.md#preparestacktrace)
- [stackTraceLimit](types.HttpError.md#stacktracelimit)

### Methods

- [isClientError](types.HttpError.md#isclienterror)
- [isServerError](types.HttpError.md#isservererror)
- [captureStackTrace](types.HttpError.md#capturestacktrace)
- [fromStatus](types.HttpError.md#fromstatus)

## Constructors

### constructor

• **new HttpError**(`status`, `detail?`, `message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `number` |
| `detail?` | `unknown` |
| `message?` | `string` |

#### Overrides

Error.constructor

## Properties

### detail

• **detail**: `unknown`

#### Defined in

[src/lib/core/error/http-error.ts:19](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-error.ts#L19)

___

### message

• **message**: `string`

#### Implementation of

[IHttpError](../interfaces/types.IHttpError.md).[message](../interfaces/types.IHttpError.md#message)

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1029

___

### name

• **name**: `string`

#### Implementation of

[IHttpError](../interfaces/types.IHttpError.md).[name](../interfaces/types.IHttpError.md#name)

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

___

### stack

• `Optional` **stack**: `string`

#### Implementation of

[IHttpError](../interfaces/types.IHttpError.md).[stack](../interfaces/types.IHttpError.md#stack)

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1030

___

### status

• **status**: `number`

#### Implementation of

[IHttpError](../interfaces/types.IHttpError.md).[status](../interfaces/types.IHttpError.md#status)

#### Defined in

[src/lib/core/error/http-error.ts:18](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-error.ts#L18)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### isClientError

▸ **isClientError**(): `boolean`

#### Returns

`boolean`

___

### isServerError

▸ **isServerError**(): `boolean`

#### Returns

`boolean`

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

___

### fromStatus

▸ `Static` **fromStatus**(`status`, `detail?`, `message?`): [`HttpError`](types.HttpError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `number` |
| `detail?` | `unknown` |
| `message?` | `string` |

#### Returns

[`HttpError`](types.HttpError.md)
