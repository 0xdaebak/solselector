
# solselector

![](https://img.shields.io/npm/v/solselector?color=red&style=for-the-badge) ![](https://img.shields.io/github/package-json/v/0xdaebak/solselector?color=green&style=for-the-badge) ![](https://img.shields.io/badge/0xdaebak-alphaLeaks-red?style=for-the-badge)

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



## License

![MIT License](https://img.shields.io/github/license/0xdaebak/solselector?style=for-the-badge)

