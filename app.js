var twilio = require('twilio')
client = twilio('ACf8b4b6e9a3b40a57fb02ea3c0534154b','77da55779da568878128ce8090f84cea'),
cronJob = require('cron').cronJob;

var numbers = ['YOURPHONENUMBER', 'YOURFRIENDSPHONENUMBER'];


var textJob = new cronJob( '0 18 * * *', function(){
  client.sendMessage( { to:'YOURPHONENUMBER', from:'YOURTWILIONUMBER', body:'Hello! Hope you’re having a good day!' }, function( err, data ) {});
},  null, true);
