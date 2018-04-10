var schedule = require('node-schedule');

var rpc = require("./rpc/config");
var promise = require("./rpc/promise");
var db = require("./db/mySql");

var web3 = rpc.conTo('test');
//rpc.conTestTo('test');


//interval 30 second
var txTest = (address) => {
    rpc.testTo('test');
    var begin =  web3.eth.blockNumber  - 10
    var rule = new schedule.RecurrenceRule();
    rule = '*/30 * * * * *' ;
    schedule.scheduleJob(rule, function(){
            var end = web3.eth.blockNumber 
            promise.getTxof(address, begin ,end)
            .then((txlist) => {
                console.log("begin at " + begin) 
                console.log("get tx : " + txlist)
                console.log("end at " + end) 
                begin = end + 1
                console.log("next monitor begin at " + begin + "\r\n") 
            }) 
    })
} 

var txListTest = (addressList) => {
    rpc.testTo('test');
    var begin =  web3.eth.blockNumber  - 10
    var rule = new schedule.RecurrenceRule();
    rule = '*/30 * * * * *' ;
    schedule.scheduleJob(rule, function(){
            var end = web3.eth.blockNumber 
            promise.getTxListof(addressList, begin ,end)
            .then((txlist) => {
                console.log("begin at " + begin) 
                console.log("get tx : " + txlist)
                console.log("end at " + end) 
                begin = end + 1
                console.log("next monitor begin at " + begin + "\r\n") 
            }) 
    })
} 

var depositListTest = (addressList) => {
    rpc.testTo('test');
    var begin =  web3.eth.blockNumber  - 10
    var rule = new schedule.RecurrenceRule();
    rule = '*/30 * * * * *' ;
    schedule.scheduleJob(rule, function(){
            var end = web3.eth.blockNumber 
            promise.getDepositof(addressList, begin ,end)
            .then((recordlist) => {
                console.log("begin at " + begin) 
                console.log("get record : " + JSON.stringify(recordlist, null, 4))
                console.log("end at " + end) 
                begin = end + 1
                console.log("next monitor begin at " + begin + "\r\n") 
            }) 
    })
} 


var depositList = (addressList) => {
    rpc.conTo('test');
    var begin =  web3.eth.blockNumber  - 10
    var rule = new schedule.RecurrenceRule();
    rule = '*/3 * * * *' ;
    schedule.scheduleJob(rule, function(){
            var end = web3.eth.blockNumber 
            promise.getDepositof(addressList, begin ,end)
            .then((recordlist) => {
                console.log("begin at " + begin) 
                console.log("get record : " + JSON.stringify(recordlist, null, 4))
                console.log("end at " + end) 
                begin = end + 1
                console.log("next monitor begin at " + begin + "\r\n") 
            }) 
    })
} 


var txList = (addressList) => {
    rpc.conTo('test');
    var begin =  web3.eth.blockNumber  - 10
    var rule = new schedule.RecurrenceRule();
    rule = '*/3 * * * *' ;
    schedule.scheduleJob(rule, function(){
            var end = web3.eth.blockNumber 
            promise.getTxListof(addressList, begin ,end)
            .then((txlist) => {
                console.log("begin at " + begin) 
                console.log("get tx : " + txlist)
                console.log("end at " + end) 
                begin = end + 1
                console.log("next monitor begin at " + begin + "\r\n") 
            }) 
    })
} 


//interval 3 minute
var tx = (address) => {
    rpc.conTo('test');
    var begin =  web3.eth.blockNumber  - 10
    var rule = new schedule.RecurrenceRule();
    rule = '*/3 * * * *' ;
    schedule.scheduleJob(rule, function(){
            var end = web3.eth.blockNumber 
            promise.getTxof(address, begin ,end)
            .then((txlist) => {
                console.log("begin at " + begin) 
                console.log("get tx : " + txlist)
                console.log("end at " + end) 
                begin = end + 1
                console.log("next monitor begin at " + begin + "\r\n") 
            }) 
    })
} 

//     timeInterval == 0.5 ? rule = '*/30 * * * * *' :      //30 second
//     timeInterval == 1 ? rule = '*/1 * * * *' :           // 1 minute
//     timeInterval == 10 ? rule = '*/10* * * *' :          //10 minute
//     timeInterval == 30 ? rule = '*/30 * * * * *' :       //30 miunte
//     timeInterval == null ? rule = '*/5 * * * * *' :      //default
//                            rule = '*/5 * * * * *' 

module.exports = {tx,txTest,txList,txListTest,depositList,depositListTest,}