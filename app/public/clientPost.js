var http = require('http');
var querystring = require('querystring');


var postRecord = (record) => {
    var postData = querystring.stringify(record); 
    var options = {
        hostname: 'ruicoins.com',
        path:'/index.php?route=api/listener/recharge',
        port: 80,
        method: 'POST',
        headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Content-Length': postData.length
        }
    };
    const req = http.request(options, (res) => {
        if(`${res.statusCode}` == '200'){
               console.log('post a record successfully');
            }
               else {
                     console.log('post failed');
                }
              //console.log(`STATUS: ${res.statusCode}`);
              //console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
            //   res.on('data', (chunk) => {
            //   console.log(`BODY: ${chunk}`);
            //   });
    });
        req.on('error', (e) => {
              console.error(`problem with request: ${e.message}`);
    }) 
    // write data to request body
        req.write(postData);
        req.end(); 
}

module.exports = {postRecord};

 
