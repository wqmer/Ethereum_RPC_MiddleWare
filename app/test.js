var schedule = require('node-schedule');

var block = require("./rpc/block");
var address = require("./utility/address");
var wallet = require("./rpc/wallet");
var txQuery = require('./txQuery');

var promise = require("./promise");
var db = require("./db/mySql");
var sync = require("./sync");



var rpc = require("./rpc/config");


var web3 = rpc.conTo('test');





    //    var rule = new schedule.RecurrenceRule();
    //        rule = '*/5 * * * * *' ;
    // // timeInterval == 0.5 ? rule = '*/30 * * * * *' ://test
    // // timeInterval == 1 ? rule = '*/1 * * * *' :
    // // timeInterval == 10 ? rule = '*/10* * * *' :
    // // timeInterval == 30 ? rule = '*/30 * * * * *' :
    // // timeInterval == null ? rule = '*/5 * * * * *' ://default
    // //                        rule = '*/5 * * * * *' 
    // // console.log("begin scan") ;


//sync.tx(address.a3a8)












   

    











