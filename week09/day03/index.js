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

//bookstore first part: list book titles
const country = 'USA';
const queryTitles = 'SELECT book_name FROM book_mast';

var list = '<ul>';
var li_open = '<li>';
var li_close = '</li>';

app.get('/titles', function get(req, res){
  conn.query(queryTitles, function(err,rows){
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

//bookstore second part: all books with full data
const queryAllBooks = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM author LEFT JOIN book_mast ON author.aut_id = book_mast.aut_id LEFT JOIN category ON book_mast.cate_id = category.cate_id LEFT JOIN newpublisher ON book_mast.pub_id = newpublisher.pub_id';

var table = '<table>';


app.get('/allbooks', function get(req, res){
  var qParams = req.query.params;
  conn.query(queryAllBooks, function(err,rows){
    if (err){
      console.log("para van", err);
    }
    else {
        console.log("Data received from Db:\n");
        console.log(rows);
        rows.forEach(function(el) {
          table += '<tr>' + '<th>'+ el.book_name + '</th>' + '<th>' + el.aut_name + '</th>' + '<th>' + el.cate_descrip + '</th>' + '<th>' + el.pub_name + '</th>' + '<th>' + el.book_price + '</th>' + '</tr>';
        })
        table += '</table>';
        res.send(table);
      }

  });
});

app.listen(3000, function(){
  console.log('server is running');
});
