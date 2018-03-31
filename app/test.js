var Web3 = require('web3');

var listern = require("./rpc/blockListerner");
var address = require("./utility/address").testAddressThree;//a3a8
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://35.227.177.81:8545'));

//web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/DO4H5SP2DNP6n3Nv1Q9I'));
//web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/1BPk9syIaAtEQzRuW9uF'));

if(web3.isConnected()) {  
   console.log("start listerning.") ;
 } else {
   console.log("rpc disconnected.") ;
 }

listern.ethDeposit(address);
//listern.block() ;