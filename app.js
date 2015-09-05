var twilio = require('twilio');
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

client = twilio('ACf8b4b6e9a3b40a57fb02ea3c0534154b','77da55779da568878128ce8090f84cea'),
cronJob = require('cron').cronJob;

var Connection = require('tedious').Connection;
var config = {
    userName: 'tejasnarayan',
    password: 'Pennapps1',
    server: 't8czp9r1d4.database.windows.net',
    // If you are on Microsoft Azure, you need this:
    options: {encrypt: true, database: 'TextMedicine'}
};
var connection = new Connection(config);
connection.on('connect', function(err) {
// If no error, then good to proceed.
    console.log("Connected");
    createTables();
});


function createTables() {
  request = new Request("CREATE TABLE users (id int NOT NULL, name varchar NOT NULL, coordinates varchar, phone varchar NOT NULL, drugs int, frequency int);", function(err) {
     if (err) {
        console.log(err);}
    });
    connection.execSql(request);
  request = new Request("CREATE TABLE messages (id int NOT NULL, sent_to int NOT NULL, sent_from int NOT NULL, time_sent TIMESTAMP, drugs int, frequency int);", function(err) {
     if (err) {
        console.log(err);}
    });
    connection.execSql(request);

}

var numbers = ['YOURPHONENUMBER', 'YOURFRIENDSPHONENUMBER'];

/*var textJob = new cronJob( '0 18 * * *', function(){
  client.sendMessage( { to:'YOURPHONENUMBER', from:'YOURTWILIONUMBER', body:'Hello! Hope you’re having a good day!' }, function( err, data ) {});
},  null, true);

for( var i = 0; i < numbers.length; i++ ) {
  client.sendMessage( { to:numbers[i], from:'YOURTWILIONUMBER', body:'Hello! Hope you’re having a good day.'}, function( err, data ) {
    console.log( data.body );
  });
}*/
