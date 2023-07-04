---
title: "User ID"
full: true
---

# User ID
When a new user visits the application for the first time, the SDK generates a UUID (Universally Unique IDentifier) and stores it locally - as a cookie and in local storage. The SDK attaches UUID with each event before sending it to the server.

```js
{
    "uuid": "916be96d-4b92-4391-89d4-c1288bb2acc6", // UUID
    "event_time": 1687431893993,
    "event_type": "session_start",
    "user_properties": { "sdk_ver": "0.1.1", "wallets": ["metamask"] }
}
```

To learn more, see [code](https://github.com/airblockai/js-sdk/blob/main/packages/core/src/storage/uuid.ts).