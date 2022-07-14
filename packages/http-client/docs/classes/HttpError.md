[@alercebroker/http-client](../README.md) / [Exports](../modules.md) / HttpError

# Class: HttpError

HttpError class

## Hierarchy

- `Error`

  ↳ **`HttpError`**

## Implements

- [`IHttpError`](../interfaces/IHttpError.md)

## Table of contents

### Constructors

- [constructor](HttpError.md#constructor)

### Properties

- [detail](HttpError.md#detail)
- [message](HttpError.md#message)
- [name](HttpError.md#name)
- [stack](HttpError.md#stack)
- [status](HttpError.md#status)
- [prepareStackTrace](HttpError.md#preparestacktrace)
- [stackTraceLimit](HttpError.md#stacktracelimit)

### Methods

- [isClientError](HttpError.md#isclienterror)
- [isServerError](HttpError.md#isservererror)
- [captureStackTrace](HttpError.md#capturestacktrace)
- [fromStatus](HttpError.md#fromstatus)

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

src/lib/core/error/http-error.ts:19

___

### message

• **message**: `string`

#### Implementation of

[IHttpError](../interfaces/IHttpError.md).[message](../interfaces/IHttpError.md#message)

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1029

___

### name

• **name**: `string`

#### Implementation of

[IHttpError](../interfaces/IHttpError.md).[name](../interfaces/IHttpError.md#name)

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

___

### stack

• `Optional` **stack**: `string`

#### Implementation of

[IHttpError](../interfaces/IHttpError.md).[stack](../interfaces/IHttpError.md#stack)

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1030

___

### status

• **status**: `number`

#### Implementation of

[IHttpError](../interfaces/IHttpError.md).[status](../interfaces/IHttpError.md#status)

#### Defined in

src/lib/core/error/http-error.ts:18

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

▸ `Static` **fromStatus**(`status`, `detail?`, `message?`): [`HttpError`](HttpError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `number` |
| `detail?` | `unknown` |
| `message?` | `string` |

#### Returns

[`HttpError`](HttpError.md)
