let keccak256 = require('js-sha3').keccak256;

//keccak256 hash
exports.keccak256 = (func) => {
    return keccak256(func);
}

//Single Selector
exports.getSelector = (func) => {
    return "0x" + keccak256(func).slice(0, 8);
}

//Multiple Selector
exports.getMultiSelector = (...func) => {
    return func.flat(1).map(e => "0x" + keccak256(e).slice(0, 8))
}

