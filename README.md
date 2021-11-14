## Steps to reproduce

- `npm install`
- try to start quokka on `source\index.ts` (this will crash)

```
TypeError [ERR_INVALID_RETURN_PROPERTY_VALUE]: Expected string, array buffer, or typed array to be returned for the "source" from the "load" function but got type undefined. 
    at new NodeError (node:internal/errors:371:5) 
    at assertBufferSource (node:internal/modules/esm/translators:87:9) 
    at ESMLoader.moduleStrategy (node:internal/modules/esm/translators:135:3) 
    at ESMLoader.moduleProvider (node:internal/modules/esm/loader:236:14)
```

- replace dependency to pre `ems` version with `npm install parse-json@5.2.0`
- try to start quokka on `source\index.ts` (this will work)

## Quokka config

```json
{
  "pro": true,
  "node": "~/.volta/bin/node",
  "nativeEsm": true,
  "env": {
    "params": {
      "runner": "--experimental-specifier-resolution=node"
    }
  }
}
```

## Environment:

```
node: v17.0.1
TypeScript: v4.5.1-rc
```

## VS Code Insider

```
Version: 1.63.0-insider (user setup)
Commit: 3bd29c1d6c6ef5b6265614def99b7257b671ae19
Date: 2021-11-12T12:04:20.740Z
Electron: 13.5.2
Chromium: 91.0.4472.164
Node.js: 14.16.0
V8: 9.1.269.39-electron.0
OS: Windows_NT x64 10.0.22494
```
