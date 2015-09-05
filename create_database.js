var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

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
  request = new Request("CREATE TABLE users (id int NOT NULL, name varchar NOT NULL, coordinates varchar, phone varchar NOT NULL, drugs int, frequency int);" +
                         "CREATE TABLE messages (id int NOT NULL, sent_to int NOT NULL, sent_from int NOT NULL, time_sent DATE NOT NULL, time_replied DATE);" +
                         "CREATE TABLE drugs (id int NOT NULL, name varchar NOT NULL);" +
                         "CREATE TABLE suppliers (id int NOT NULL, coordinates varchar, username varchar, password varchar, drugs varchar);", function(err) {
     if (err) {
        console.log(err);}
    });
    connection.execSql(request);
}
