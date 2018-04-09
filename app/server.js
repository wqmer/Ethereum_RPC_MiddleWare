const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const address = require('./utility/address');
var txQuery = require('./txQuery');
var wallet = require('./rpc/wallet');

var app = express();
var port = 3000 ;

app.use(bodyParser.json());




app.get('/eth/tx/:id', (req, res) => {

  var address = req.params.id.toLowerCase();

  const p =  new Promise((resolve,reject) => txQuery.transactonOf(address, record => resolve(record)));
  
  p.then((record) => res.send(record),(e) => res.sendStatus(400));  


})


app.get('/eth/deposit/:id', (req, res) => {

  var address = req.params.id.toLowerCase();

  const p =  new Promise((resolve,reject) => txQuery.depositOf(address, amount => resolve(amount)));
  
  p.then((amount) => res.send(amount),(e) => res.sendStatus(400));  



 })

app.get('/eth/send/:id', (req, res) => {

  var address = req.params.id.toLowerCase();

  const p =  new Promise((resolve,reject) => txQuery.sendOf(address, amount => resolve(amount)));
  
  p.then((amount) => res.send(amount),(e) => res.sendStatus(400));  

 })


app.get('/eth/multibalance/:id', (req, res) => {

  var address = req.params.id.toLowerCase();

  const p =  new Promise((resolve,reject) => txQuery.multiBalanceOf(address, amount => resolve(amount)));
  
  p.then((amount) => res.send(amount),(e) => res.sendStatus(400));  

 })

 

//to do 
 //token



  app.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
  


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
