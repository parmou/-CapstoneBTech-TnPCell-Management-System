/*const mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise = global.Promise;
  //connect to mongodb
  mongoose.connect('mongodb://localhost/teachForIndia');
  mongoose.connection.once('open',function(){
    console.log("Connection has been made, now make fireworks!");
  }).on('error',function(error){
    console.log("Connection error!",error);
  });*/

  module.exports = {
    'url' : 'mongodb://127.0.0.1:27017/tnpcell-management-system',
    'uri': 'mongodb://paro:paro@ds247499.mlab.com:47499/tnpcell-management-system'
  }