var moment = require('moment');

var timeByNow = () =>  {  
    var now = moment()
    var formatted = now.format('HH:mm:ss')
    return formatted
}

module.exports =  {timeByNow}