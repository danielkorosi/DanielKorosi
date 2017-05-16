'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');

});
app.use('/assets', express.static('assets'))

app.get('/doubling', function(req, res) {
  var input = req.query.input;
  if (input) {
    res.send({
      received: input,
      result: input*2,
  })
} else {
  res.send({
    error: "Please provide an input!"
  })
}
});

app.get('/greeter', function(req, res) {
  var name = req.query.name;
  var title = req.query.title;

  if (name && title) {
    res.send({welcome_message: "Oh, hi there " + name + ", my dear " + title + "!"})
  } else if (name === undefined) {
      res.send({error: "Please provide a name!"})
  } else if (title === undefined) {
      res.send({error: "Please provide a title!"})
  }
});

//app.get('/appenda'), function(req, res) {

//}


app.listen(8080);
