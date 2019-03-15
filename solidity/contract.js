console.log("start contract js");


const path = require('path');
const fs = require('fs');
const solc = require('solc');
const filepath = path.resolve(__dirname,'contracts','hello.sol');

console.log(filepath);
var source = fs.readFileSync(filepath, "utf8");
console.log(source);
console.log(solc.compile(source,1));
module.exports = solc.compile(source, 1);
//module.exports = solc.compile(source, 1).contracts[':helloworld'];

