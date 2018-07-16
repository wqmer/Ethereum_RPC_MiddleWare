// var rpc = require('./config');
// var web3 = rpc.conTo();
const Web3 = require('web3')
const web3 = new Web3()
const {utility} = require('./utility')

class EthTx{
  constructor(coin_type , from = '', to = '' , value = 0 , hash = '' , ) {
    this.coin_type = '5' ;
    this.from = from;
    this.to = to;
    this.value = value;
    this.hash = hash;
  }
}

class TokenTx {
    constructor(tokenInstance, address = '', amount = '' , tx = '') {
      this.name = tokenInstance.name;
      this.address = address;
      this.amount = utility.tokenHexToDecimal(amount,tokenInstance);
      this.amount = web3.toBigNumber(amount).toFixed()/ Math.pow(10, tokenInstance.decimals)
      this.tx = tx;
    }
  }

class TokenTxNew {
    constructor(tokenInstance, from = '' , to = '', value = '' , hash = '') {
      this.coin_type = '1' ;
      this.from = from  ;
      this.to = to  ;
      this.value = web3.toBigNumber(value).toFixed()/ Math.pow(10, tokenInstance.decimals) ;
      this.hash = hash ;
    }
  }


// class Token {
//   constructor(token) {
//     var t = web3.eth.contract(token.abi).at(token.address);
//     this.address = token.address;
//     this.name = t.name();
//     this.symbol = t.symbol();
//     this.decimals = t.decimals().toNumber();
//     this.totalSupply = t.totalSupply().toNumber()/ Math.pow(10, t.decimals().toNumber()) 
//   }
// }

class Contract {
  constructor(address , abi) {
    var t = web3.eth.contract(abi).at(address);
    this.name = t.name();
    this.symbol = t.symbol();
    this.decimals = t.decimals().toNumber();
    this.totalSupply = t.totalSupply().toNumber()/ Math.pow(10, t.decimals().toNumber())  
  }
}

class OptionOfFilter { 
      constructor(tokenInstance, begin, end ) {
             this.fromBlock =  begin ;
             this.toBlock = end ;
             this.address = tokenInstance.address ;
             this.topics = [ '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' ]
             this.token = tokenInstance  
  }
     getToken() {
             return this.token 
     }
}




module.exports = {EthTx ,TokenTx,Contract,TokenTxNew, OptionOfFilter}