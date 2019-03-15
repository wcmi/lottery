import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import  web3 from './web3';
import  lottery  from './lottery'
class App extends Component {

  state={
    manageradd:'',
    players:[],
    balance:'',
    value:'',
    message:''
  }
  async  componentDidMount(){
  const  manager =   await lottery.methods.manager().call();
  const players =  await lottery.methods.getplayers().call();
  const balance  = await web3.eth.getBalance(lottery.options.address);

  console.log(manager);
  this.setState({manageradd:manager,players,balance});
  }
  onsubmit =async event =>{

    event.preventDefault();
    const  address = await  web3.eth.getAccounts();
    this.setState({message:'Waiting for  the transaction to be completed'});
    await lottery.methods.enter().send({from:address[0],value:web3.utils.toWei(this.state.value,'ether')});
    this.setState({message:"enter success..... "});
  }

  render() {
    console.log(this.state.value);
    return (
      <div className="App">
        <header className="App-header">
          <img src="google.ico"  alt="logo" />
          <h1>hello weiwei</h1>
          <label>magnager:{this.state.manageradd}</label><br/>
          <label>players num :{this.state.players.length}</label><br/>
          <label>balance:{web3.utils.fromWei(this.state.balance,'ether')} ether</label>

          <form onSubmit={this.onsubmit}>
              <h3>you want to participtate in your future</h3>
              <div>
                  <label>amount of money:</label>
                  <input
                  value ={this.state.value}
                  onChange={event=>{this.setState({value:event.target.value})}}
                  />

              </div>

              <button>commit</button>
          </form>

          <p>{this.state.message}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
