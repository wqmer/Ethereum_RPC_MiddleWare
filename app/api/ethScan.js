const request = require('request');

var getAlltx = (address, apiKey, callback) => {
    if (!apiKey) apiKey ="RNMVU83FNPRWRFISHC873IXDPQXTHKSYGN";
    request({
      url: `http://api-ropsten.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        callback('Unable to connect server');
      } else if (response.statusCode === 400) {
        callback('Unable to fetch data.');
      } else if (response.statusCode === 200) {
        callback(undefined,body.result);
      }
    });
  };


var getMulitBalance = (addressList, apiKey, callback) => {
  if (!apiKey) apiKey ="RNMVU83FNPRWRFISHC873IXDPQXTHKSYGN";
  request({
    url: `https://api-ropsten.etherscan.io/api?module=account&action=balancemulti&address=${addressList}&tag=latest&apikey=${apiKey}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect server');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch data.');
    } else if (response.statusCode === 200) {
      callback(undefined,body.result);
    }
  });
};


var getMulitBalance = (addressList, apiKey, callback) => {
  if (!apiKey) apiKey ="RNMVU83FNPRWRFISHC873IXDPQXTHKSYGN";
  request({
    url: `https://api-ropsten.etherscan.io/api?module=account&action=balancemulti&address=${addressList}&tag=latest&apikey=${apiKey}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect server');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch data.');
    } else if (response.statusCode === 200) {
      callback(undefined,body.result);
    }
  });
};









  module.exports ={getAlltx , getMulitBalance} 