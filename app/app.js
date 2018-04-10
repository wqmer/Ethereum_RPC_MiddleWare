var schedule = require('node-schedule')

var block = require("./rpc/block")
var address = require("./utility/address").address
var addressList = require("./utility/address").addressList
var wallet = require("./rpc/wallet")
var txQuery = require('./txQuery')

var promise = require("./rpc/promise")
var db = require("./db/mySql")
var track = require("./track")

var rpc = require("./rpc/config")
var web3 = rpc.conTo('test')
var Record = require('./utility/record')


// var begin = 3003680
// var end = 3003690
// block.getDepositof(addressList , begin , end ,result => {
// console.log(result) 
// })
// var addresslist = web3.eth.accounts
// track.depositListTest(addresslist)




// var address = '0x6791b7fad43e824b0832213e6a16bbd6a785a3a8';
// var start = 2965849 ;
// var end = 2965849 ;
// block.getTxof(address,start,end,result => console.log(typeof(result)))


// var address = '0x6791b7fad43e824b0832213e6a16bbd6a785a3a8';
// txQuery.transactonOf(address, result => console.log(result))



// var txHash = '0xecef407be4901582c16f5f291ccc3452876109de685b47afb872900a6618224b' ;
// var tx = web3.eth.getTransaction(txHash);
// var record = new Record(tx.to , wallet.weiToeth(tx.value) , tx.hash) ;




txQuery.depositOf(address.a3a8 ,result => console.log(typeof(result)))
// console.log(record)



















   

    











