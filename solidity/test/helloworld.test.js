const  ganache=require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const assert = require('assert');

const  {bytecode,interface} =require('../compile');


var helloworld;
var value;
beforeEach(async()=>{// async 表示异步， 和await 配合使用
  value = await  web3.eth.getAccounts();// 传递参数，比如构造函数传递参数在deploy里。
  helloworld  = await new  web3.eth.Contract(JSON.parse(interface)).deploy({data:bytecode,argurements:['testname']})
  .send({from:value[0],gas:'1000000'});
  console.log(value);
});
describe('hello world',()=>{
  it('deploy contract ',()=>{
    console.log(helloworld);
    assert.ok(helloworld.options.address);// 有定义返回ture,未定义则返回false
  });
  /*
  it('call static function',async()=>{
    const message = helloworld.methods.getname().call();
    assert.equal('hah',message);
  })
  it('call dynamic functin', async()=>{
    await helloworld.methods.changename('temp').send({from:value[0]});
    const mesage = helloworld.methods.getname().call();
    assert.equal('hah',message);
  })*/
})
