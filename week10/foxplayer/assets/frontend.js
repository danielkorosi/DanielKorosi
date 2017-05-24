'use strict';

var playlists = document.querySelector('.playlists');
var trackList = document.querySelector('.tracks');

function ajax(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
                var resp = JSON.parse(request.response );
                callback(resp);
            }
    }
    request.send();
}

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





ajax('http://localhost:3000/playlists', displayPlaylist);
ajax('http://localhost:3000/playlist-tracks', displayTracks);
