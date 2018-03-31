var Web3 = require('web3');
var web3 = new Web3();
//web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/DO4H5SP2DNP6n3Nv1Q9I'));
//web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/1BPk9syIaAtEQzRuW9uF'));
web3.setProvider(new web3.providers.HttpProvider('http://35.227.177.81:8545'));

var balanceOf = (address) => web3.eth.getBalance(address); 


//get transcation record 
var getTxOf = (address , blockForm , blockTo) => {}




//todo 
  //estimaite gas



