'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');

});
app.use('/assets', express.static('assets'))

app.get('/doubling', function(req, res) {
  var input = req.query.input;
  res.send({
    "received": input,
  "result": input*2,
})
});

app.listen(8080);
