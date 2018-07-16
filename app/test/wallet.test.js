var expect = require('expect.js');
var BigNumber = require('bignumber.js');
var {sendEth, balanceOf ,weiToeth,bigweiToeth} = require('../rpc/wallet')

describe('balacneOf', () => { 
    it('should return balance amount', () => {
        var address = '0x6791b7fad43e824b0832213e6a16bbd6a785a3a8';
        console.log(balanceOf(address))
      expect(balanceOf(address)).to.be.an('number')
      });
})

describe('bigweiToeth', () => { 
    it('should return eth amount', () => {
        var bigNumber = new BigNumber(10005.12312123)
        // console.log(bigNumber);
        // console.log(bigNumber.toNumber());
        // console.log(bigweiToeth(bigNumber));
      
        expect(bigweiToeth(bigNumber)).to.be.an('number')
      });
})

describe('weiToeth', () => { 
    it('should return balance amount', () => {
        var wei = '10000000000000000';
        console.log(weiToeth(wei));
      expect(weiToeth(wei)).to.be.an('number')
      });
})

// describe('sendEth', () => { 
//     it('should return a tx receipt object', () => {       
//         var option = {};
//         expect(sendEth(option)).to.be.an('object')
//       });
// }) 

