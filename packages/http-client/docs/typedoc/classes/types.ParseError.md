[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / ParseError

# Class: ParseError

[types](../modules/types.md).ParseError

Parse error class

## Hierarchy

- `Error`

  ↳ **`ParseError`**

## Table of contents

### Constructors

- [constructor](types.ParseError.md#constructor)

### Properties

- [message](types.ParseError.md#message)
- [name](types.ParseError.md#name)
- [stack](types.ParseError.md#stack)
- [prepareStackTrace](types.ParseError.md#preparestacktrace)
- [stackTraceLimit](types.ParseError.md#stacktracelimit)

### Methods

- [captureStackTrace](types.ParseError.md#capturestacktrace)

## Constructors

### constructor

• **new ParseError**(`m`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `string` |

#### Overrides

Error.constructor

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1029

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1030

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
