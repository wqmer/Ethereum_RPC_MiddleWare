var block = require('./block')
var address = require('../utility/address')
var wallet = require('./wallet')
var Promise = require('bluebird') 

//   const p = 
//   new Promise((resolve,reject) => {
//         Yourmethod (param, result => {
//         resolve(result) ;
//       });
//   });

//   p.then((result) => {
//   do(result)
//   },(e) => {
//      //handle e
//   });  




var getTxof = (address,  begin , end ) => new Promise ((resolve,reject) => block.getTxof(address , begin , end ,result => resolve(result)))  

var getTxListof = (addresslist,  begin , end ) => new Promise ((resolve,reject) => block.getTxofList(addresslist , begin , end ,result => resolve(result)))  

var getDepositof =  (addresslist,  begin , end ) => new Promise ((resolve,reject) => block.getDepositof(addresslist , begin , end ,result => resolve(result)))  



//todo 
var syncDepo = {} 

var syncSend = {}



module.exports = {getTxof , getTxListof, getDepositof}      