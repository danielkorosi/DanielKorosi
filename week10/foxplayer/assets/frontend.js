'use strict';

var playlists = document.querySelector('.playlists');
var trackList = document.querySelector('.tracks');

function getPlaylists(callback) {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/playlists', true);
  request.send();

  request.onreadystatechange = function () {
   if (request.readyState === 4 && request.status === 200) {
    var playlistData = JSON.parse(request.response);
      console.log(playlistData);
      callback(playlistData);
    }
  }
};

function getTracks(callback) {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/playlist-tracks', true);
  request.send();

  request.onreadystatechange = function () {
   if (request.readyState === 4 && request.status === 200) {
    var tracks = JSON.parse(request.response);
      console.log(tracks);
      callback(tracks);
    }
  }
};

function displayPlaylist(data) {
  data.forEach(function(el) {
    var playlistItem = document.createElement('li');
    playlists.appendChild(playlistItem);
    playlistItem.innerHTML = el.title;
  });
};

function displayTracks(data) {
  data.forEach(function(el) {
    var trackItem = document.createElement('li');
    trackList.appendChild(trackItem);
    console.log(trackItem);
    trackItem.innerHTML = el.title;
  });
};

getPlaylists(displayPlaylist);
getTracks(displayTracks);
