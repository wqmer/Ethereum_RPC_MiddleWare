const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io:443/ws'));
var subscription = web3.eth.subscribe( 'logs' , { address:'0xd26114cd6ee289accf82350c8d8487fedb8a0c07',  topics: ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef', null, null ]} , function(error, result){} )
                  .on("data", function(log){ console.log(log) } )

