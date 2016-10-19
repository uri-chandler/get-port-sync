# get-port-sync
a synchronous version of [sindresorhus/get-port](https://github.com/sindresorhus/get-port)

---
## Install
```
npm install get-port-sync
```


---
## Usage
```javascript
const getPortSync = require('get-port-sync');
let   freePort    = null;

try       { freePort = getPortSync() }
catch (e) { /* boo */                }
```


---
## Test
```
npm run test
```


---
## Related
* [sindresorhus/get-port](https://github.com/sindresorhus/get-port)         --> the original get-port module
* [sindresorhus/get-port-cli](https://github.com/sindresorhus/get-port-cli) --> CLI for the original get-port module




