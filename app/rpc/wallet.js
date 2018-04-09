var Web3 = require('web3');
var web3 = new Web3();

//web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/DO4H5SP2DNP6n3Nv1Q9I'));
//web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/1BPk9syIaAtEQzRuW9uF'));
web3.setProvider(new web3.providers.HttpProvider('http://35.227.177.81:8000'));

//check balance from eth, bigNubmer return with getBalance
var balanceOf = (address) => {
  var wei = web3.eth.getBalance(address).toNumber();
  var eth = web3.fromWei(wei, "ether" ) ;
  console.log("balance is : " + eth);
  return eth
} 

//transfer 
var sendEth =  (address , toAddress , amount ) => {
  var option = {
    from: address, 
    to:toAddress, 
    value: web3.toWei(amount, 'ether'), 
    gasLimit: 210000, 
    gasPrice: web3.eth.gasPrice 
  }
  return web3.eth.sendTransaction(option)
}


//wei transfer to eth in number type 
// var info = web3.eth.getBlock(3150);
// console.log(info);

// {
//   "number": 3,
//   "hash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
//   "parentHash": "0x2302e1c0b972d00932deb5dab9eb2982f570597d9d42504c05d9c2147eaf9c88",
//   "nonce": "0xfb6e1a62d119228b",
//   "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
//   "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
//   "transactionsRoot": "0x3a1b03875115b79539e5bd33fb00d8f7b7cd61929d5a3c574f507b8acf415bee",
//   "stateRoot": "0xf1133199d44695dfa8fd1bcfe424d82854b5cebef75bddd7e40ea94cda515bcb",
//   "miner": "0x8888f1f195afa192cfee860698584c030f4c9db1",
//   "difficulty": BigNumber,
//   "totalDifficulty": BigNumber,
//   "size": 616,
//   "extraData": "0x",
//   "gasLimit": 3141592,
//   "gasUsed": 21662,
//   "timestamp": 1429287689,
//   "transactions": [
//     "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b"
//   ],
//   "uncles": []
// }









//todo type vaildation
 












  






module.exports = {sendEth, balanceOf ,weiToeth}

//todo 
  //estimaite gas



