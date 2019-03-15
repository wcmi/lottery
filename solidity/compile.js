
//console.log("start contract js");


const path = require('path');
const fs = require('fs');
const solc = require('solc');
const filepath = path.resolve(__dirname,'contracts','lottery.sol');

//console.log(filepath);
var source = fs.readFileSync(filepath, "utf8");
//console.log(source);
//console.log(solc.compile(source,1));
//console.log(solc.compile(source,1).contracts[':firstcompile']);
// firstcompile 是合约的名称
module.exports = solc.compile(source,1).contracts[':lottery'];
//module.exports 导入出去
