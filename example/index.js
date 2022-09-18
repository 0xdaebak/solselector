let selector = require("solselector");

let main = () => {
    //keccak256 hash
    let keccak256 = selector.keccak256("balanceOf()");
    console.log(keccak256);

    //get Single selector
    let singleSelector = selector.getSelector("balanceOf()");
    console.log(singleSelector);

    //get Multiple selector
    let multiSelector = selector.getMultiSelector("balanceOf()", "transferFrom(address,uint256)");
    console.log(multiSelector);

    //get multiple selector via Array of function names
    let multiArraySelector = selector.getMultiSelector(["balanceOf()", "transferFrom(address,uint256)", "deposit()"]);
    console.log(multiArraySelector);

}
main();