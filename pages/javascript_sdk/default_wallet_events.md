---
title: "Default Wallet Events"
full: true
---

# Default Wallet Events

## Metamask

### Metamask Wallets
If the SDK detects a connected Metamask wallet at the start of a session, it sends the `metamask_wallets` event.

```js
{
    "uuid": ,
    "event_time": ,
    "event_type": "metamask_wallets",
    "user_properties": {
      "accounts": ["0x4d42a0695724fe9a34fdg6d668a54f34dx968807"],
      "chainId": "0x89"
    }
}
```

### Metamask accountsChanged
The SDK sends `metamask_accountsChanged` event when a user changes her account in her Metamask wallet.

```js
{
    "uuid": ,
    "event_time": ,
    "event_type": "metamask_accountsChanged",
    "user_properties": {
      "newAddress": ["0x4d42a0695724fe9a34fdg6d668a54f34dx968807"],
      "chainId": "0x1"
    }
}
```

### Metamask chainChanged
The SDK sends `metamask_chainChanged` event when a user changes her blockchain in her Metamask wallet.

```js
{
    "uuid": ,
    "event_time": ,
    "event_type": "metamask_chainChanged",
    "user_properties": {
      "accounts": ["0x4d42a0695724fe9a34fdg6d668a54f34dx968807"],
      "chainId": "0x89"
    }
}
```

### Metamask Error

```js
{
    "uuid": ,
    "event_time": ,
    "event_type": "metamask_error",
    "event_properties": {
      "code": 4001,
      "message": "User rejected the request.",
      "stack": 
    }
}
```


## Coinbase

### Coinbase Wallets
If the SDK detects a connected Coinbase wallet at the start of a session, it sends the `coinbase_wallets` event.

```js
{
    "uuid": ,
    "event_time": ,
    "event_type": "coinbase_wallets",
    "user_properties": {
      "accounts": ["0x4d42a0695724fe9a34fdg6d668a54f34dx968807"],
      "chainId": "0x89"
    }
}
```

### Coinbase accountsChanged
The SDK sends `coinbase_accountsChanged` event when a user changes her account in her Coinbase wallet.

```js
{
    "uuid": ,
    "event_time": ,
    "event_type": "coinbase_accountsChanged",
    "user_properties": {
      "newAddress": ["0x4d42a0695724fe9a34fdg6d668a54f34dx968807"],
      "chainId": "0x1"
    }
}
```

### Coinbase chainChanged
The SDK sends `coinbase_chainChanged` event when a user changes her blockchain in her Coinbase wallet.

```js
{
    "uuid": ,
    "event_time": ,
    "event_type": "coinbase_chainChanged",
    "user_properties": {
      "accounts": ["0x4d42a0695724fe9a34fdg6d668a54f34dx968807"],
      "chainId": "0x89"
    }
}
```

### Coinbase Error

```js
{
    "uuid": ,
    "event_time": ,
    "event_type": "coinbase_error",
    "event_properties": {
      "code": 4001,
      "message": "User denied account authorization",
      "stack": 
    }
}
```


## Tracking Wallet Errors
The SDK auto-detects most web3 wallet events but cannot auto-detect wallet error events. To track wallet errors, you can pass the error in a function.

### Metamask Errors
Call the `metamask_error` function.

```js
 airblock.init(API_KEY, SERVER_URL);

// Error handling
try {
  connectWallet();
} catch (err) {
  airblock.metamask_error(err);
}
```

### Coinbase Errors
Call the `coinbase_error` function.

```js
airblock.init(API_KEY, SERVER_URL);

// Error handling
try {
  connectWallet();
} catch (err) {
  airblock.coinbase_error(err);
}
```