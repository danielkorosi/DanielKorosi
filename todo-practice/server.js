'use strict';

const mysql = require('mysql');
const bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

var conn = mysql.createConnection({
  host: "localhost",
  user: "'root'",
  password: "root", //in case of real projects put these data in another file which is put in gitignore
  database: "todo"
});

conn.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/todo.html');
});

app.get('/todos', function(req, res) {
  conn.query('SELECT * FROM todolist', function(err, rows){
    if (err) {
        console.log('hiba', err);
    } else {
      console.log(rows);
    }
  res.send(rows)
  })
});

app.get('/todos/:id', function(req, res) {
  conn.query('SELECT * FROM todolist WHERE id = "'+req.params.id+'"', function(err, rows){
    if (err) {
        console.log('hiba', err);
    } else {
      console.log(rows);
    }
  res.send(rows)
  })
});

app.listen(3000, function(){
    console.log('server is running');
});
