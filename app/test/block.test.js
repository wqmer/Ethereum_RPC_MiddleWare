var expect = require('expect.js');
var {getTxof, getTxofList, getDepositof} = require('../rpc/block')


describe('getTxof', () => { 
    it('should return a array of tx history', () => {
        var address = '0x6791b7fad43e824b0832213e6a16bbd6a785a3a8';
        var start = 2965849 ;
        var end = 2965849 ;
        getTxof(address,start,end,result => expect(result).to.be.an('array'))
      });
})

describe('getTxofList', () => { 
    it('should return a array of tx history', () => {

        var start = 2965849 ;
        
        var end = 2965849 ;

        var addressList  =  [

            "0x45ab14fac0bd324ae8db85a31be3e2286c709114",
        
            "0x6791b7fad43e824b0832213e6a16bbd6a785a3a8",
        
            "0xe80c8bdfc0cdd341b5042438aa9bcc3b0af87a77" ,//test main 
        
            "0x6e17d4e4f4751613ddd1eddfa9cf2a0881ca5953"    
        
        ]
        getTxofList(addressList,start,end,result =>  expect(result).to.be.an('array'))
       
      });
})

describe('getDepositof', () => { 
    it('should return an array of balance', () => {
        var addressList  =  [

            "0x45ab14fac0bd324ae8db85a31be3e2286c709114",
        
            "0x6791b7fad43e824b0832213e6a16bbd6a785a3a8",
        
            "0xe80c8bdfc0cdd341b5042438aa9bcc3b0af87a77" ,//test main 
        
            "0x6e17d4e4f4751613ddd1eddfa9cf2a0881ca5953"    
        
        ]
        var start = 2965849 ;
        var end = 2965849 ;
        getDepositof(addressList,start,end,result => expect(result).to.be.an('array'))
      });
})

// describe('transactonOf', () => { 
//     it('should return a tx array ', () => {
//         var address = '0x6791b7fad43e824b0832213e6a16bbd6a785a3a8';
//         transactonOf(address, result =>  expect(result).toBeA('array'))
//       });
// })