const rpcApi = require('./myEth')
const utility = require('../utility/utility')
const Promise = require('bluebird')
const EthTx = require('../utility/model').EthTx;

const getEthDepositof = ( addressList, blockNo ) => 
       new Promise    ( ( resolve, reject ) => {
                          rpcApi.getBlockbyNumber(blockNo).then( block => block.transactions.filter ( tx => addressList.includes(tx.to)) )
                                                //    .then( txlist => txlist.map(tx => new EthTx(undefined, tx.from, tx.to, utility.bigweiToeth(tx.value), tx.hash) ) )
                                                   .then( result => resolve(result) )
                                                   .catch( error => reject(error) )                                     
})

const getEthDepositBy = ( addressList, begin, end ) => 
       new Promise    ( ( resolve, reject ) => {
                                                var array  = []
                                                var txlist = []

                                                for ( var i = begin ; i <= end; ){
                                                      array.push(i++)
                                                } 

                                                Promise.map(array, blockNo =>
                                                            getEthDepositof(addressList, blockNo).then( result => result )
                                                            .then( txlist => txlist.map(tx => new EthTx(undefined, tx.from, tx.to, utility.bigweiToeth(tx.value), tx.hash) ) )
                                                )
                                                .then( result => {
                                                       result.forEach(element => {
                                                             txlist =  txlist.concat(element)
                                                       })
                                                })
                                                .then(  () => resolve(txlist) )
                                                .catch( error => reject(error) )                                     
})




//todo get token Deposit


module.exports = {
                  getEthDepositBy 
}