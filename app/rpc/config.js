var Web3 = require('web3');
var web3 = new Web3();



var main  = [ 
    
    
    { address : 'https://mainnet.infura.io/DO4H5SP2DNP6n3Nv1Q9I',    name : 'mainnet by jusite'   } ,


    { address : 'http://122.128.111.212:8000 ' ,    name : 'mainnet by infura'  }   


]
   

var test  = [ 
    
    
    { address :  'http://35.227.177.81:8000',    name : 'testnet by jusite'   } ,


    { address :  'https://ropsten.infura.io/1BPk9syIaAtEQzRuW9uF',    name : 'testnet by infura'  }   


]






var conTo =(ip) => {

    var net 

    if (ip === 'test') net = test
    if (ip === 'main') net = main


   for (i = 0 ; i < net.length ; i++ ) {

    web3.setProvider(new web3.providers.HttpProvider(net[i].address));

    if (web3.isConnected())  {  
        
        console.log("rpc connected to " + net[i].name)
      
        return web3

   } 


    // web3.isConnected()? console.log("rpc connected to " + provider ) : console.log("rpc disconnected.")
}



console.log("rpc disconnected ")

}



module.exports = {conTo}




