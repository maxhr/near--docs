---
id: "account.Account"
title: "Class: Account"
sidebar_label: "Account"
custom_edit_url: null
---

[account](../modules/account.md).Account

This class provides common account related RPC calls including signing transactions with a KeyPair.

**`Example`**

```ts
{@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#account}
```

**`Hint`**

Use WalletConnection in the browser to redirect to [NEAR Wallet](https://docs.near.org/docs/tools/near-wallet) for Account/key management using the BrowserLocalStorageKeyStore.

**`See`**

[Account Spec](https://nomicon.io/DataStructures/Account.html)

## Hierarchy

- **`Account`**

  ↳ [`AccountMultisig`](account_multisig.AccountMultisig.md)

  ↳ [`ConnectedWalletAccount`](walletAccount.ConnectedWalletAccount.md)

## Constructors

### constructor

**new Account**(`connection`, `accountId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`Connection`](connection.Connection.md) |
| `accountId` | `string` |

#### Defined in

[account.ts:150](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L150)

## Properties

### accountId

 `Readonly` **accountId**: `string`

#### Defined in

[account.ts:148](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L148)

___

### connection

 `Readonly` **connection**: [`Connection`](connection.Connection.md)

#### Defined in

[account.ts:147](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L147)

## Methods

### addKey

**addKey**(`publicKey`, `contractId?`, `methodNames?`, `amount?`): `Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

**`See`**

[https://docs.near.org/docs/concepts/account#access-keys](https://docs.near.org/docs/concepts/account#access-keys)

**`Todo`**

expand this API to support more options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `string` \| [`PublicKey`](utils_key_pair.PublicKey.md) | A public key to be associated with the contract |
| `contractId?` | `string` | NEAR account where the contract is deployed |
| `methodNames?` | `string` \| `string`[] | The method names on the contract that should be allowed to be called. Pass null for no method names and '' or [] for any method names. |
| `amount?` | `BN` | Payment in yoctoⓃ that is sent to the contract during this function call |

#### Returns

`Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Defined in

[account.ts:424](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L424)

___

### createAccount

**createAccount**(`newAccountId`, `publicKey`, `amount`): `Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newAccountId` | `string` | NEAR account name to be created |
| `publicKey` | `string` \| [`PublicKey`](utils_key_pair.PublicKey.md) | A public key created from the masterAccount |
| `amount` | `BN` | - |

#### Returns

`Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Defined in

[account.ts:355](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L355)

___

### createAndDeployContract

**createAndDeployContract**(`contractId`, `publicKey`, `data`, `amount`): `Promise`<[`Account`](account.Account.md)\>

Create a new account and deploy a contract to it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractId` | `string` | NEAR account where the contract is deployed |
| `publicKey` | `string` \| [`PublicKey`](utils_key_pair.PublicKey.md) | The public key to add to the created contract account |
| `data` | `Uint8Array` | The compiled contract code |
| `amount` | `BN` | of NEAR to transfer to the created contract account. Transfer enough to pay for storage https://docs.near.org/docs/concepts/storage-staking |

#### Returns

`Promise`<[`Account`](account.Account.md)\>

#### Defined in

[account.ts:330](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L330)

___

### deleteAccount

**deleteAccount**(`beneficiaryId`): `Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `beneficiaryId` | `string` | The NEAR account that will receive the remaining Ⓝ balance from the account being deleted |

#### Returns

`Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Defined in

[account.ts:366](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L366)

___

### deleteKey

**deleteKey**(`publicKey`): `Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `string` \| [`PublicKey`](utils_key_pair.PublicKey.md) | The public key to be deleted |

#### Returns

`Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Defined in

[account.ts:447](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L447)

___

### deployContract

**deployContract**(`data`): `Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The compiled contract code |

#### Returns

`Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Defined in

[account.ts:379](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L379)

___

### findAccessKey

**findAccessKey**(`receiverId`, `actions`): `Promise`<{ `accessKey`: [`AccessKeyView`](../interfaces/providers_provider.AccessKeyView.md) ; `publicKey`: [`PublicKey`](utils_key_pair.PublicKey.md)  }\>

Finds the AccessKeyView associated with the accounts PublicKey stored in the KeyStore.

**`Todo`**

Find matching access key based on transaction (i.e. receiverId and actions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiverId` | `string` | currently unused (see todo) |
| `actions` | [`Action`](transaction.Action.md)[] | currently unused (see todo) |

#### Returns

`Promise`<{ `accessKey`: [`AccessKeyView`](../interfaces/providers_provider.AccessKeyView.md) ; `publicKey`: [`PublicKey`](utils_key_pair.PublicKey.md)  }\>

`{ publicKey PublicKey; accessKey: AccessKeyView }`

#### Defined in

[account.ts:283](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L283)

___

### functionCall

**functionCall**(`__namedParameters`): `Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

Execute function call

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ChangeFunctionCallOptions`](../interfaces/account.ChangeFunctionCallOptions.md) |

#### Returns

`Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Defined in

[account.ts:395](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L395)

___

### getAccessKeys

**getAccessKeys**(): `Promise`<[`AccessKeyInfoView`](../interfaces/providers_provider.AccessKeyInfoView.md)[]\>

Get all access keys for the account

**`See`**

[https://docs.near.org/docs/develop/front-end/rpc#view-access-key-list](https://docs.near.org/docs/develop/front-end/rpc#view-access-key-list)

#### Returns

`Promise`<[`AccessKeyInfoView`](../interfaces/providers_provider.AccessKeyInfoView.md)[]\>

#### Defined in

[account.ts:576](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L576)

___

### getAccountBalance

**getAccountBalance**(): `Promise`<[`AccountBalance`](../interfaces/account.AccountBalance.md)\>

Returns calculated account balance

#### Returns

`Promise`<[`AccountBalance`](../interfaces/account.AccountBalance.md)\>

#### Defined in

[account.ts:615](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L615)

___

### getAccountDetails

**getAccountDetails**(): `Promise`<{ `authorizedApps`: [`AccountAuthorizedApp`](../interfaces/account.AccountAuthorizedApp.md)[]  }\>

Returns a list of authorized apps

**`Todo`**

update the response value to return all the different keys, not just app keys.

#### Returns

`Promise`<{ `authorizedApps`: [`AccountAuthorizedApp`](../interfaces/account.AccountAuthorizedApp.md)[]  }\>

#### Defined in

[account.ts:595](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L595)

___

### sendMoney

**sendMoney**(`receiverId`, `amount`): `Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiverId` | `string` | NEAR account receiving Ⓝ |
| `amount` | `BN` | Amount to send in yoctoⓃ |

#### Returns

`Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Defined in

[account.ts:344](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L344)

___

### signAndSendTransaction

`Protected` **signAndSendTransaction**(`__namedParameters`): `Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

Sign a transaction to preform a list of actions and broadcast it using the RPC API.

**`See`**

JsonRpcProvider.sendTransaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`SignAndSendTransactionOptions`](../interfaces/account.SignAndSendTransactionOptions.md) |

#### Returns

`Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Defined in

[account.ts:215](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L215)

___

### signTransaction

`Protected` **signTransaction**(`receiverId`, `actions`): `Promise`<[`Uint8Array`, [`SignedTransaction`](transaction.SignedTransaction.md)]\>

Create a signed transaction which can be broadcast to the network

**`See`**

JsonRpcProvider.sendTransaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiverId` | `string` | NEAR account receiving the transaction |
| `actions` | [`Action`](transaction.Action.md)[] | list of actions to perform as part of the transaction |

#### Returns

`Promise`<[`Uint8Array`, [`SignedTransaction`](transaction.SignedTransaction.md)]\>

#### Defined in

[account.ts:195](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L195)

___

### stake

**stake**(`publicKey`, `amount`): `Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

**`See`**

[https://docs.near.org/docs/validator/staking-overview](https://docs.near.org/docs/validator/staking-overview)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `string` \| [`PublicKey`](utils_key_pair.PublicKey.md) | The public key for the account that's staking |
| `amount` | `BN` | The account to stake in yoctoⓃ |

#### Returns

`Promise`<[`FinalExecutionOutcome`](../interfaces/providers_provider.FinalExecutionOutcome.md)\>

#### Defined in

[account.ts:460](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L460)

___

### state

**state**(): `Promise`<[`AccountView`](../interfaces/providers_provider.AccountView.md)\>

Returns basic NEAR account information via the `view_account` RPC query method

**`See`**

[https://docs.near.org/docs/develop/front-end/rpc#view-account](https://docs.near.org/docs/develop/front-end/rpc#view-account)

#### Returns

`Promise`<[`AccountView`](../interfaces/providers_provider.AccountView.md)\>

#### Defined in

[account.ts:159](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L159)

___

### viewFunction

**viewFunction**(...`restArgs`): `Promise`<`any`\>

Invoke a contract view function using the RPC API.

**`See`**

[https://docs.near.org/docs/develop/front-end/rpc#call-a-contract-function](https://docs.near.org/docs/develop/front-end/rpc#call-a-contract-function)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...restArgs` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[account.ts:493](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L493)

___

### viewFunctionV1

**viewFunctionV1**(`contractId`, `methodName`, `args?`, `__namedParameters?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractId` | `string` |
| `methodName` | `string` |
| `args` | `any` |
| `__namedParameters` | `Object` |
| `__namedParameters.blockQuery?` | [`BlockReference`](../modules/providers_provider.md#blockreference) |
| `__namedParameters.jsContract?` | `boolean` |
| `__namedParameters.parse?` | (`response`: `Uint8Array`) => `any` |
| `__namedParameters.stringify?` | (`input`: `any`) => `Buffer` |

#### Returns

`Promise`<`any`\>

#### Defined in

[account.ts:505](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L505)

___

### viewFunctionV2

**viewFunctionV2**(`__namedParameters`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ViewFunctionCallOptions`](../interfaces/account.ViewFunctionCallOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[account.ts:516](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L516)

___

### viewState

**viewState**(`prefix`, `blockQuery?`): `Promise`<{ `key`: `Buffer` ; `value`: `Buffer`  }[]\>

Returns the state (key value pairs) of this account's contract based on the key prefix.
Pass an empty string for prefix if you would like to return the entire state.

**`See`**

[https://docs.near.org/docs/develop/front-end/rpc#view-contract-state](https://docs.near.org/docs/develop/front-end/rpc#view-contract-state)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` \| `Uint8Array` | allows to filter which keys should be returned. Empty prefix means all keys. String prefix is utf-8 encoded. |
| `blockQuery` | [`BlockReference`](../modules/providers_provider.md#blockreference) | specifies which block to query state at. By default returns last "optimistic" block (i.e. not necessarily finalized). |

#### Returns

`Promise`<{ `key`: `Buffer` ; `value`: `Buffer`  }[]\>

#### Defined in

[account.ts:558](https://github.com/near/near-api-js/blob/ecc6fa8f/packages/near-api-js/src/account.ts#L558)
