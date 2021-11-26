# Description

Unable to start quokka on file with code that relies on [zod](https://github.com/colinhacks/zod) package

## Steps to reproduce

- `npm install`
- try to start quokka on `source\index.ts` (this will crash)

```
ReferenceError: extensionFormatMap is not defined 
    at ESMLoader.load (node:internal/modules/esm/loader:303:26) 
    at ESMLoader.moduleProvider (node:internal/modules/esm/loader:230:58) 
    at new ModuleJob (node:internal/modules/esm/module_job:63:26) 
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:244:11) 
    at async ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:78:21) 
    at async Promise.all (index 1) 
    at async link (node:internal/modules/esm/module_job:83:9) 
```

- trying to launch the same file in vscode debugger will work (with ts-node/esm loader) or simply invoking:

```
node --experimental-specifier-resolution=node --loader ts-node/esm source/index.ts
```

- removing `zod` related code will also resolve the issue

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
TypeScript: v4.5.2
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
