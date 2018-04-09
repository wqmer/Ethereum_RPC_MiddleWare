var mysql = require('mysql'); 
var config = {
              mysql_pool : mysql.createPool({
              host     :  '127.0.0.1',
              user     :  'root',
              password :  '198811532Ww',
              database :  'eth',
              connectTimeout : 20000 ,
              acquireTimeout : 20000
            })
       };

var con = config.mysql_pool;


//get all customers .
var getAll = () => {
    con.getConnection(function(err, connection) {
        if(err)throw err ;
        connection.query('SELECT * FROM customers', function (error, results, fields) {
            if (error) throw error;
               console.log('data : ', results);
             connection.release();
             //connection.destroy();
        });   
    });  
}

//get by id .
var getByid = (id) => {
    con.getConnection(function(err, connection) {
        if(err)throw err ;
        connection.query('SELECT * FROM customers WHERE userId = ?',[id],function (error, results, fields) {
            if (error) throw error;
            console.log('data : ', results);
            connection.release();
            //connection.destroy();
        });   
    });  
}

//get balance by id
var getBalanceByid = (id) => {
    con.getConnection(function(err, connection) {
        if(err)throw err ;
        connection.query('SELECT ethBalance FROM customers WHERE userId = ?',[id],function (error, results, fields) {
            if (error) throw error;
            console.log('balance:', results);
            // connection.release();
            connection.destroy();
        });   
    }); 

}


//update balance by id
var updateBalanceByid = (amount,id) => {     
    con.getConnection(function(err, connection) {
        if(err)throw err ;
        connection.query('UPDATE customers SET ethBalance = ? WHERE userId = ?',[amount ,id],function (error, results, fields) {
            if (error) throw error;
            console.log("Updated successfullly");
            // connection.release();
            connection.destroy();
        });   
    }); 
}


//update balance by address
var updateBalanceByaddress = (amount,address) => {     
    con.getConnection(function(err, connection) {
        if(err)throw err ;
        connection.query('UPDATE customers SET ethBalance = ? WHERE ethAddress = ?',[amount ,address],function (error, results, fields) {
            if (error) throw error;
            console.log("Updated successfullly");
            // connection.release();
            connection.destroy();
        });   
    }); 
}


//plus update balance by address
var plusBalanceByaddress = (amount,address) => {     
    con.getConnection(function(err, connection) {
        //PDATE TableName SET PDATE TableName SET TableField = TableField + 1
        if(err)throw err ;
        connection.query('UPDATE customers SET ethBalance = ethBalance + ? WHERE ethAddress = ?',[amount ,address],function (error, results, fields) {
            if (error) throw error;
            console.log("deposit successfullly");
            connection.release();
            //connection.destroy();
        });   
    }); 
}

//minus update
var minusBalanceByaddress = (amount,address) => {     
    con.getConnection(function(err, connection) {
        //PDATE TableName SET PDATE TableName SET TableField = TableField + 1
        if(err)throw err ;
        connection.query('UPDATE customers SET ethBalance = ethBalance - ? WHERE ethAddress = ?',[amount ,address],function (error, results, fields) {
            if (error) throw error;
            console.log("send successfullly");
            connection.release();
            //connection.destroy();
        });   
    }); 
}



//adduser
var addUser = (user) => {
    con.getConnection(function(err, connection) {
        if(err)throw err ;
        connection.query('INSERT INTO customers (userName, email, phone, ethAddress) VALUES (?, ?, ?, ?)',[user.name ,user.email, user.phone , user.address],function (error, results, fields) {
            if (error) throw error;
            console.log("Added successfullly");
            connection.release();
            //connection.destroy();
        });   
    }); 
}

//todo
//var getTxByid = (id) => {}
module.exports = {getAll,getByid,getBalanceByid,updateBalanceByid,updateBalanceByaddress,plusBalanceByaddress,minusBalanceByaddress,addUser} ;




