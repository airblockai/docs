---
title: "Configuration"
full: true
---

# Configuration

### Multiple applications
If you have multiple applications, you can use API_KEY to identify each application.

For example, you can use `API_KEY = "test"` for your test app and `API_KEY = "app1"` for production app.

### Opt users out of tracking
To disable tracking for a user, you can set `optOut` to `true`. If `optOut` is `true`, events aren't sent to the server. Default value of `optOut` is `false`.

### Device fingerprinting
To disable device fingerprinting, you can set `fingerprinting` to `false`. If set to `false`, the SDK doesn't generate fingerprint. Default value is `true`.

```js
import * as airblock from "@airblock/js-sdk";
 
const API_KEY = "app1"; // required
const SERVER_URL = "https://..."; // required
 
airblock.init(API_KEY, SERVER_URL, {
	optOut: false
	fingerprinting: true
    });
```
