'use strict';


const mysql = require('mysql');
const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var response;

app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

var conn = mysql.createConnection({
  host: "localhost",
  user: "'root'",
  password: "root", //in case of real projects put these data in another file which is put in gitignore
  database: "caesar"
});

conn.connect(function(err){
  if(err){
    console.log("Error connecting to database");
    return;
  }
  console.log("Connection established");
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/caesar.html')
});


app.post('/decode', function(req, res) {
  var encodedArray = req.body.text.split('');
  encodedArray.forEach(function(el) {
    el = el + parseInt(req.body.shift)
  })

  conn.query('INSERT INTO caesar (text) VALUES (decodedText)', function(err, rows){
    if (err) {
      response = {
        status: 'error',
        message: err.message
      }
    }
    var decodedText =
    response = {
    status: "ok",
    text: decodedText
  }
  }
})

var decoding = function(x) {
  x.
}

app.listen(3000, function(){
  console.log('server is running');
});
