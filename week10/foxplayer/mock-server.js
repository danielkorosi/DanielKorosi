'use strict';

var express = require('express');
var app = express();
app.use('/assets', express.static('assets'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/foxplayer.html');
});

var playlists = [
	{ "id": 1, "title": "Favorites", "system": 1},
	{ "id": 2, "title": "Music for programming", "system": 0},
	{ "id": 3, "title": "Driving", "system": 0},
	{ "id": 5, "title": "Fox house", "system": 0},
];


var allTracks = [
	{ "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "https://upload.wikimedia.org/wikipedia/commons/1/1f/DetroitBlues.ogg" },
  { "id": 25, "title": "lkgfnsldkfng", "duration": 545, "path": "https://upload.wikimedia.org/wikipedia/commons/1/1f/DetroitBlues.ogg"},
	{ "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "https://upload.wikimedia.org/wikipedia/commons/1/1f/DetroitBlues.ogg" }
]

app.get('/playlists', function(req, res){
  //console.log(playlists);
  res.send(playlists)
});

app.get('/playlist-tracks', function(req, res){
  res.send(allTracks)
});

app.get('/playlist-tracks/:playlist_id', function(req, res){

  res.send(allTracks)
});
app.listen(3000);
