'use strict';

var express = require('express');
var five = require('five');
var app = express();

//endpoint definition:
app.get('/', function(req, res) {
  //console.log(req.query);
  res.send('ez itt a fooldal')
});


app.get('/five/:lang', function(req, res) {
  var lang = req.params.lang;
  var fiveFunc = five[lang];
  res.send(fiveFunc())
})

/*app.get('/five', function(req, res) {
  var lang = req.query.lang || 'klingon' ;
  var fiveFunc = five[lang];
  res.send(fiveFunc())
})*/

app.listen(3000);
