var expect = require('expect.js');
var {depositOf,sendOf,multiBalanceOf,transactonOf} = require('../txQuery');


describe('depositOf', () => { 
    it('should return total deposit amount', () => {
        var address = '0x6791b7fad43e824b0832213e6a16bbd6a785a3a8';
       // expect(1).to.be.an('array');
       depositOf(address, amount => expect(amount).to.be.an('amount'))
      });
})

describe('sendOf', () => { 
    it('should return total send amount', () => {
        var address = '0x6791b7fad43e824b0832213e6a16bbd6a785a3a8';
        sendOf(address, amount => expect(amount).to.be.an('number'))
      });
})

describe('multiBalanceOf', () => { 

    it('should return an array of balance', () => {

        var addressList  =  [

            "0x45ab14fac0bd324ae8db85a31be3e2286c709114",
        
            "0x6791b7fad43e824b0832213e6a16bbd6a785a3a8",
        
            "0xe80c8bdfc0cdd341b5042438aa9bcc3b0af87a77" ,//test main 
        
            "0x6e17d4e4f4751613ddd1eddfa9cf2a0881ca5953"    
        
        ]
       multiBalanceOf(addressList, result => expect(amount).to.be.an('number'))
      });
})

describe('transactonOf', () => { 
    it('should return a tx array ', () => {
        var address = '0x6791b7fad43e824b0832213e6a16bbd6a785a3a8';
      transactonOf(address, result => expect(amount).to.be.an('number'))
      });
})