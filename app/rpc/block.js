
var schedule = require('node-schedule');
var arrayList = require('array-list');

var rpc = require('./config');
var web3 = rpc.conTo('test');

//watch incoming token transcation.
var tokenDepositTrack = (accountAddress , contractAddress) => {
    var options = {
        fromBlock: "latest",
        toBlock: "latest",
        address: contractAddress,//CONTRACT ADDR
        from: accountAddress//WALLET ADDR
     };  
    var filterToken = web3.eth.filter(options);
        filterToken.watch(function (error, log) {
        console.log(log.transaction.Hash); //  {"address":"0x0000000000000000000000000000000000000000", "data":"0x0000000000000000000000000000000000000000000000000000000000000000", ...}
    });
}


//detect  ETH trasaciton ----------- bug --> duplicate result
// var ethDepositListerner = (address) =>  { 
//   web3.isConnected()? console.log("start listerning : " + address) : console.log("rpc disconnected.")
//   var  pNumber = 0 ;
//   var  collect = 0

//   let filter = web3.eth.filter("latest");

//   filter.watch((error, result) => {
     
//    if (!error) {
//         var cNumber = web3.eth.getBlock(result).number 
//         console.log(" pervious block : " +  pNumber + "  begin scan block : " + cNumber + ". Current duplicate is " + collect   )

//         if (cNumber == pNumber) {
//         console.log("Duplicated block !!!!!!!.")
//         collect++
//        } 
//         pNumber  = cNumber ;
     
    //      var confirmedBlock = web3.eth.getBlock(earlierNumber) ;
    //      var confirmedBlock =  web3.eth.getBlock(result);
    //   if (confirmedBlock.transactions.length > 0) {
    //       console.log("begin scan : " + earlierNumber);
    //       confirmedBlock.transactions.forEach(function(txhash) {
    //         tx = web3.eth.getTransaction(txhash) ;  
    //       if ( tx.to == address ) {                     
    //            var depositAmount =  web3.fromWei(tx.value.toNumber(), "ether" )
    //            console.log("address: " +address+ " deposit amount: "+depositAmount+ " ETH." ) ;
    //       }    //console.log(transaction.hash);  maybe duplicate tx with latcy of internet .   
    //            //callback todo
          
    //     }) 
    //   }

//     }
//   })    
// }


 var getTxof = (address ,start, end, callback) => {

     var txlist = []
     for (var i = start; i <= end; i++) {        
      var  block = web3.eth.getBlock(i,true)
      block.transactions.forEach(function(tx) {
  
           if ( tx.to == address ) {      
               txlist.push(tx.hash);
            }
         })
        }
       callback (txlist)
}

//search block 
var blockOf = (start, end , callback ) => {
    //web3.isConnected()? console.log("scan begin.") : console.log("rpc disconnected.")
    //  console.time('100-block scan');
     start == undefined ? start = web3.eth.blockNumber - 10: start = start 
     end  == undefined ? end = web3.eth.blockNumber: end = end  
    // console.log("Monitor begin at " + start) 
     for (var i = start; i <= end; i++) {  
        callback ( web3.eth.getBlock(i).hash )
        }
       //   console.log("scan end");
       //   console.timeEnd('100-block scan')   
}


// var timerSyncTxDev = (address,timeInterval, blockInterval ) => {

//     if (blockInterval == null) blockInterval = 0 ;//default

//     var begin = web3.eth.blockNumber - blockInterval ;
//     var rule = new schedule.RecurrenceRule();
//     timeInterval == 0.5 ? rule = '*/30 * * * * *' ://test
//     timeInterval == 1 ? rule = '*/1 * * * *' :
//     timeInterval == 10 ? rule = '*/10* * * *' :
//     timeInterval == 30 ? rule = '*/30 * * * * *' :
//     timeInterval == null ? rule = '*/5 * * * * *' ://default
//                            rule = '*/5 * * * * *' 
  
//     console.log("begin scan") ;
 
//     schedule.scheduleJob(rule, function(){
//         //console.log('The answer to life, the universe, and everything!')    
//         console.log("scan begin at block No: " + begin );
//         var current = syncTxByAddress(address , begin ) ; 
//         console.log("scan end at block No: " + current + "\r\n");
//         begin = current + 1 ; 
//       });     
// }

// var  timerSyncTx = (address) => {
//     var begin = web3.eth.blockNumber - 12;
//     console.log("begin scan") ;

//     var rule = new schedule.RecurrenceRule();
//     rule = '*/10* * * * *' 
//     schedule.scheduleJob(rule, function(){
//         //console.log('The answer to life, the universe, and everything!')    
//         console.log("scan begin at block No: " + begin );
//         var current = syncTxByAddress(address , begin ) ; 
//         console.log("scan end at block No: " + current );
//         console.log("\r\n");
//         begin = current + 1 ; 
//       });     
// }

// var  timerSyncTxLong = (address) => {
//     var begin = web3.eth.blockNumber - 30;
//     console.log("begin scan") ;
//     var rule = new schedule.RecurrenceRule();
//     rule = '*/30* * * * *' 

//     schedule.scheduleJob(rule, function(){
//         //console.log('The answer to life, the universe, and everything!')    
//         console.log("scan begin at block No: " + begin );
//         var current = syncTxByAddress(address , begin ) ; 
//         console.log("scan end at block No: " + current );
//         console.log("\r\n");
//         begin = current + 1 ; 
//       });     
// }

// var ethtxDetect = (address) =>  { 
//     web3.isConnected()? console.log("start listerning : " + address) : console.log("rpc disconnected.")
  
//     let filter = web3.eth.filter("latest");
//     filter.watch(function(error, result) {
//      if (!error) {
//             var earlierNumber = web3.eth.getBlock(result).number - 2;
//             var block = web3.eth.getBlock(earlierNumber,true) ;
//         if (block.transactions.length > 0) {
//             block.transactions.forEach(function(tx) {
//             if (address == tx.from ) console.log("tx find! :" + tx.hash);              
//           }) 
//         }
//       }
//     })    
//   }

module.exports = {tokenDepositTrack, getTxof };

          // var amount =  web3.fromWei(tx.value.toNumber(), "ether" ) ;
                    // db.plusBalanceByaddress(amount , address); 
                    // console.log(address) ;
                    // console.log("adress: " +address+ " deposit amount: "+amount+ " ETH." ) 

                    
                // } else if (address == tx.from ){
                    // callback(tx.hash) ;
                    // var amount =  web3.fromWei(tx.value.toNumber(), "ether" ) ;
                    // db.minusBalanceByaddress(amount , address) ;
                    // console.log("adress: " +address+ " send amount: "+amount+ " ETH." ) 
                // }
