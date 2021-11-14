# Steps to reproduce

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
