
# solselector

⚓ Get The 4 byte Selector/Method Signature of any function


## Installation

Install dependencies

```bash
  npm install solselector
```


## Key Functions

```javascript
let selector = require("solselector");

//full keccak256 hash
selector.keccak256("balanceOf()");

//get 4byte selector
selector.getSelector("balanceOf()");

//get 4byte selector - multi arguments
selector.getMultiSelector("balanceOf()", "transferFrom(address,uint256)");

//get 4byte selector - multi array arguments
selector.getMultiSelector(["balanceOf()", "transferFrom(address,uint256)", "deposit()"]);

```

## Authors

- [@0xdaebak](https://www.github.com/0xdaebak)



## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

