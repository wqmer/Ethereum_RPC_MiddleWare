var schedule = require('node-schedule');

var rpc = require("./rpc/config");
var promise = require("./promise");
var db = require("./db/mySql");

var web3 = rpc.conTo('main');
// rpc.conTestTo('test');

var tx = (address) => {
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

module.exports = {tx}