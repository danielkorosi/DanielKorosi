'use strict';

const mysql = require('mysql');
const bodyParser = require('body-parser');
var express = require('express');
var app = express();

var playlistsListed;
var tracksListed;
app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

var conn = mysql.createConnection({
  host: "localhost",
  user: "'root'",
  password: "root", //in case of real projects put these data in another file which is put in gitignore
  database: "foxplayer"
});

conn.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/foxplayer.html');
});

app.get('/playlists', function(req, res){
    conn.query('SELECT * FROM playlists', function(err, rows) {
        if (err) {
            console.log('hiba', err);
        }else {
            playlistsListed = rows;
			      console.log(playlistsListed);
        };
        res.send(playlistsListed);
    });
});

app.get('/playlist-tracks', function(req, res){
    conn.query('SELECT * FROM tracks', function(err, rows) {
        if (err) {
            console.log('hiba', err);
        }else {
            tracksListed = rows;
			      console.log(tracksListed);
        };
        res.send(tracksListed);
    });
});

app.delete('/playlists/:id', function (req, res) {
    var idSelected = parseInt(req.params.id);
    var afterDeletion = {};
    conn.query('DELETE FROM playlists WHERE id = "'+idSelected +'"', function(err, rows) {
      conn.query('SELECT * FROM playlists', function(err, rows){
        	if (err){
            	console.log('hiba', err);
        	} else{
            	afterDeletion = rows;
				      console.log(afterDeletion);
        	};
        	res.send(afterDeletion);
    	});
	});
});

app.post('/playlists', function (req, res) {
    console.log(req.body);
    var post = req.body

    var postedList = {};
    conn.query('INSERT INTO playlists (playlist, system) VALUES ("'+post.playlist +'", "'+post.system+'")', function(err, rows) {
      conn.query('SELECT * FROM playlists', function(err, rows){
        	if (err){
            	console.log('hiba', err);
        	} else{
            	postedList = rows;
				      //console.log(postedList);
        	};
        	res.send(postedList);
    	});
	});
});


app.listen(3000, function(){
    console.log('server is running');
});
