---
id: "contract.ContractMethods"
title: "Interface: ContractMethods"
sidebar_label: "ContractMethods"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[contract](../modules/contract.md).ContractMethods

## Properties

### changeMethods

 **changeMethods**: `string`[]

Methods that change state. These methods cost gas and require a signed transaction.

**`See`**

[functionCall](../classes/account.Account.md#functioncall)

#### Defined in

[contract.ts:37](https://github.com/maxhr/near--near-api-js/blob/87bf3c7e/packages/near-api-js/src/contract.ts#L37)

___

### viewMethods

 **viewMethods**: `string`[]

View methods do not require a signed transaction.

**`See`**

[viewFunction](../classes/account.Account.md#viewfunction)

#### Defined in

[contract.ts:44](https://github.com/maxhr/near--near-api-js/blob/87bf3c7e/packages/near-api-js/src/contract.ts#L44)
