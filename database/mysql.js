var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "198811532Ww"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });







  //todo  mysql 


  //get balance , address , with userid


  //update balance with userid , add tx reocrd 





