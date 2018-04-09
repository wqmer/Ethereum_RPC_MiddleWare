var wallet = require("./rpc/wallet");
var ethApi = require('./utility/ethApi');

var transactonOf = (address, callback) => {
    ethApi.getAlltx(address, null,(error, result) => {
        var amount = 0 ;
        if (error) {
          console.log(error);
        } else {   
          //console.log("All transaction : " + result );
        }
        callback(JSON.stringify(result , null,  "\t"));
      })  
}

var depositOf = (address , callback) => {   
    ethApi.getAlltx(address, null,(error, result) => {
       
        var amount = 0 ;
        if (error) {
          console.log(error);
        } else {   
          result.forEach(function(tx) {
          if(tx.to == address){
             amount = amount + wallet.weiToeth(tx.value) ;
        }         
          })
          console.log("deposit amount total is " + amount );
          callback(JSON.stringify(amount , null,  "\t"));
        } 
    })  
}

var sendOf = (address , callback) => {
    ethApi.getAlltx(address, null,(error, result) => {
        var amount = 0 ;
        if (error) {
          console.log(error);
        } else {   
          result.forEach(function(tx) {
          if(tx.from == address){
             amount = amount + wallet.weiToeth(tx.value) ;
          }
          })
        //console.log("send amount total is " + amount );
        }
        callback(JSON.stringify(amount , null,  "\t"));
      })  
}


var multiBalanceOf = (addressList , callback) => {
    ethApi.getMulitBalance(addressList , null ,(error , result) => {
        if (error) {
           console.log(error);
        }   else {  
            result.forEach(function(record) {
                 record.balance = wallet.weiToeth(record.balance );
                })
         //console.log("search result : " + JSON.stringify(result , null,  "\t"));   
         callback(JSON.stringify(result, null,  "\t"));
        }   
    })   
}

//todo , token using event

//query tx by block 

//query tx by timestamp

module.exports ={depositOf,sendOf,multiBalanceOf,transactonOf}