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
const query = 'SELECT book_name FROM book_mast';

var list = '<ul>';
var li_open = '<li>';
var li_close = '</li>';

app.get('/', function get(req, res){
  conn.query(query, function(err,rows){
    if (err){
      console.log("para van", err);
    } else {
      console.log("Data received from Db:\n");
      rows.forEach(function(el) {
        list += li_open + el.book_name + li_close;
      })
      list += '</ul>';
      res.send(list);
      console.log(list);
    }
  });
});

app.listen(3000, function(){
  console.log('server is running');
});
