var Web3 = require('web3');
var web3 = new Web3();
//web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/DO4H5SP2DNP6n3Nv1Q9I'));
//web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/1BPk9syIaAtEQzRuW9uF'));
web3.setProvider(new web3.providers.HttpProvider('http://35.227.177.81:8545'));


//watch incoming token transcation.
var tokenDeposit = (accountAddress , contractAddress) => {
    var options = {
        fromBlock: "latest",
        toBlock: "latest",
        address: contractAddress,//CONTRACT ADDR
        from: accountAddress//WALLET ADDR
     };  

    var filterToken = web3.eth.filter(options);
        filterToken.watch(function (error, log) {
        console.log(log.transactionHash); //  {"address":"0x0000000000000000000000000000000000000000", "data":"0x0000000000000000000000000000000000000000000000000000000000000000", ...}
    });
}


//detect incoming ETH trasaciton
var ethDeposit = (address) => {
  let filter = web3.eth.filter("latest");
  filter.watch(function(error, result) {
   if (!error) {
     let blockNumber = web3.eth.getBlock(result).number - 11 ;
     let confirmedBlock = web3.eth.getBlock(blockNumber) ;
      if (confirmedBlock.transactions.length > 0) {
             confirmedBlock.transactions.forEach(function(txId) {
                 let transaction = web3.eth.getTransaction(txId);
                  if ( transaction.to == address ) {
                       console.log(transaction.hash);
                  }   
             }) 
         }
      }
  })    
}

//watch an address to update balance 
// let balance = web3.eth.getBalance(address);
// const filter = web3.eth.filter('latest');
// filter.watch((err, res) => {
//   if (err) {
//     console.log(`Watch error: ${err}`);
//   } else {
//     // Update balance
//     web3.eth.getBalance(address, (err, bal) => {
//       if (err) {
//         console.log(`getBalance error: ${err}`);
//       } else {
//         balance = bal;
//         console.log(`Balance [${address}]: ${web3.fromWei(balance, "ether")}`);
//       }
//     });
//   }
// });

var block = () => {

      let filter = web3.eth.filter("latest");
          filter.watch(function(error, result) {
               if (!error) {
                  console.log(result) ;
               }
         })
}



module.exports = { ethDeposit , tokenDeposit , block };