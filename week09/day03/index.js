'use strict';

const mysql = require('mysql');
var express = require('express');
var app = express();

var conn = mysql.createConnection({
  host: "localhost",
  user: "'root'",
  password: "root", //in case of real projects put these data in another file which is put in gitignore
  database: "bookstore"
});

conn.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

const country = 'USA';
const query = "SELECT * FROM author WHERE country = ?";

app.get('/', function get(req, res){
  var result = [];
  conn.query(query, [country], function(err,rows){
    if (err){
      console.log("para van", err);
    } else {
      console.log("Data received from Db:\n");
      rows.forEach(function(row) {
        result.push(row.aut_name);
    })
    }
    res.send(result);
  });
});

app.listen(3000, function(){
  console.log('server is running');
});
