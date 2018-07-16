// const OptionOfFilter = require('../utility/model').OptionOfFilter
// const Bonyo = require('../utility/asset').Bonyo
// const Tron = require('../utility/asset').Tron
const web3 = require('web3');
const app = require('./product')
const rpcApi = require('./myEth')
const exhcangeList = require('../utility/asset')


let address = '0x50c6f9eec711dda41002e1e17c8bbc7d0c6869fc'
let start = 5739169
let end = 5739171


// let addressMaster = '0x3078daf97efd27ec46151076f709010f28097700'
let addressMaster =  '0x3078DAf97efd27ec46151076F709010F28097700'
let addresstest = '0x1253ded4EAbfE521B8bca652c7164301fcaAf594'
let block = 5912856
let begin = 5755892 
let over = 5755894


let addressList =  [address,addressMaster]

// rpcApi.getConnected().then( web3 => console.log() ).catch(error => console.log(error))

// console.log(web3.version)

// rpcApi.getBlockbyNumber(block).then(result => console.log(result))

app.getEthDepositBy( addressList, 5739191, 5739237 ).then( result => console.log(result) )

// rpcApi.getBlockNumber().then(result => console.log(result))


