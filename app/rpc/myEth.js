

const Promise = require('bluebird')
const {mainNet} = require('../config')
const Web3 = require('web3');
const EthTx = require('../utility/model').EthTx;
const TokenTx = require('../utility/model').TokenTx;
const util = require('ethereumjs-util'); 


const getConnected = ( provider = mainNet.infura) => {
    return new Promise ( ( resolve ,reject ) => {
                         let web3 = new Web3();
                             web3.setProvider(new web3.providers.HttpProvider(provider) )
                             web3.eth.net.isListening().then(result => {
                             resolve(web3)
                             })
                             .catch(error => reject(new Error('disconnected from rpc')))

    })
}

const getAccounts = (client) =>  { 
      return new Promise ( ( resolve ,reject) => {
                            getConnected(client).then( web3 => {
                            web3.eth.getAccounts(  (error, result)  => { 
                                              if(error) throw new Error(error)
                                               resolve(result)
                                              })
                           }) 
                           .catch(error => reject(error))
 
    })
}

const getBlockNumber = () => {
      return new Promise ( ( resolve ,reject) => {
                              getConnected().then( web3 => {
                              web3.eth.getBlockNumber(  (error, result)  => { 
                                                  if(error) throw new Error(error)
                                                   resolve(result)
                                                  })
                             }) 
                            .catch(error => reject(error))
    })
}

const getBlockbyNumber = (number) => {
      return new Promise ( (resolve ,reject) => {
                            getConnected().then( web3 => {
                            web3.eth.getBlock(number,true,(error, result)  => { 
                                                        if(error) throw new Error(error)
                                                         resolve(result)
                                            })
                           }) 
                           .catch(error => reject(error))
    })
}



//---------------listern event for web3 0.2.X-------------------------
// const setFilter = (option) => { 
//       return new Promise ( (resolve ,reject) => {
//                               getConnected(mainNet.infura).then( web3 => {
//                                              resolve(web3.eth.filter(option))
//                               }) 
//                               .catch(error => reject(error))
//       })              
// }

// const getLog = (filter) => { 
//        return new Promise ( (resolve ,reject) => {
//                              filter.get( (error, result) =>  { 
//                              if(error) throw new Error(error)
//                              resolve(result)
//                           });
//        })              
// }





//ethScan api ,promisfy
var getContractAbi = (contractAddress) =>  new Promise ((resolve,reject) => ethScan.getContractAbi(contractAddress, null,  (error , result ) =>  resolve(result)) )   
//todo 


module.exports = { 

                   getConnected,
    
                   getContractAbi, 

                   getAccounts,

                   getBlockbyNumber, 

                   getBlockNumber,

}      

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

