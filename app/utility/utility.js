const Web3 = require('web3');
const parseDecimalNumber = require('parse-decimal-number');
const BigNumber = require('bignumber.js');
const web3 = new Web3()

var bigweiToeth = (bigNumber) => parseDecimalNumber(web3.utils.fromWei(bigNumber , 'ether'))

var weiToeth = (wei) => parseDecimalNumber(web3.fromWei(wei, 'ether'))

var tokenAdjustValue = (amount , tokenInstance) =>  balance / Math.pow(10, tokenInstance.decimals)

var tokenHexToDecimal = (hex , tokenInstance) =>  web3.toBigNumber(hex).toFixed()/ Math.pow(10, tokenInstance.decimals)


module.exports = { weiToeth, bigweiToeth, tokenAdjustValue, tokenHexToDecimal }





