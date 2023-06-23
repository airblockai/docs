---
title: "Default Web2 Events"
full: true
---

# Default Web2 Events

### Session Start
The SDK sends `session_start` event at the start of each session.
The SDK auto-detects wallets installed in the user's browser.

```js
{
    "uuid": "916be96d-4b92-4391-89d4-c1288bb2acc6",
    "event_time": 1687431893993,
    "event_type": "session_start",
    "user_properties": { "sdk_ver": "0.1.1", "wallets": ["metamask"] }
}
```


### Web Attribution
The SDK sends `attribution` event at the start of each session or whenever there's a change in attribution parameters within a session.

```js
{
    "uuid": ,
    "event_time": ,
    "event_type": "attribution",
    "event_properties": {
      "page_url": ,
      "referrer": ,
      "referring_domain": ,
      "utm_source": ,
      "utm_medium": ,
      "utm_campaign": ,
      "utm_content": ,
      "utm_term": ,
      "utm_id": 
    }
}
```

### Device Fingerprint
The SDK generates and sends device `fingerprint` event at the start of each session.

```js
{
    "uuid": ,
    "event_time": ,
    "event_type": "fingerprint",
    "user_properties": {
      "architecture": ,
      "audio": ,
      "canvas_hash": {},
      "colorDepth": ,
      "colorGamut": ,
      "contrast": ,
      "cookiesEnabled": ,
      "deviceMemory": ,
      "fontPreferences": {},
      "fonts": [],
      "forcedColors": ,
      "hardwareConcurrency": ,
      "hdr": ,
      "indexedDB": ,
      "languages": [],
      "localStorage": ,
      "math": {},
      "monochrome": 0,
      "openDatabase": ,
      "pdfViewerEnabled": ,
      "platform": ,
      "plugins": [],
      "reducedMotion": ,
      "screenFrame": [],
      "screenResolution": [],
      "sessionStorage": ,
      "timezone": "",
      "touchSupport": {},
      "vendor": "",
      "vendorFlavors": [],
      "videoCard": {},
      "visitorId": ""
    }
  }
```
