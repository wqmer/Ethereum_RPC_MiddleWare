const schedule = require('node-schedule');
// const post = require('./public/client').postRecord;
const OptionOfFilter = require('./utility/model').OptionOfFilter
const apiRpc = require('./rpc/myEth')
const app = require('./rpc/product')
const exchangeList = require('./utility/asset').exchange


var rule = new schedule.RecurrenceRule();
rule = '*/12 * * * * *' ;
    // rule = '*/1 * * * *' ;

var begin
var account

schedule.scheduleJob(rule, () => {
          apiRpc.getAccounts().then(result => result.length == 0 ? account = exchangeList : account = result )
         .then( () => {
                       apiRpc.getBlockNumber().then( current => { 
                           console.log("current block is " + current)
                           begin == undefined ? begin = current - 12 : begin = begin
                           if (begin > current - 12 ) { 
                               console.log('Waiting syncing\r\n') 
                           }
                           else {   
                               app.getEthDepositBy(account, begin, begin).then( (recordlist) => {
                                    console.log("Scaning block at " + begin + '\r\n')      
                                    if(recordlist.length > 0) {
                                       recordlist.forEach ( (item) => {
                                       console.log("get tx : " + JSON.stringify(item, null, 4) + '\r\n' )
                                         // post(item);
                                       })
                                    }                      
                                    begin++
                               })         
                           }
                       })
        }) 
        .catch(error => console.error)      
})
                





// //     timeInterval == 0.5 ? rule = '*/30 * * * * *' :      //30 second
// //     timeInterval == 1 ? rule = '*/1 * * * *' :           // 1 minute
// //     timeInterval == 10 ? rule = '*/10* * * *' :          //10 minute
// //     timeInterval == 30 ? rule = '*/30 * * * * *' :       //30 miunte
// //     timeInterval == null ? rule = '*/5 * * * * *' :      //default
// //                            rule = '*/5 * * * * *' 

