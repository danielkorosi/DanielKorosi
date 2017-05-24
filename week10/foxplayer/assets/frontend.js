'use strict';

var playlists = document.querySelector('.playlists');
var trackList = document.querySelector('.tracks');
var addNewPlaylist = document.querySelector('.left-add');
var audio = document.querySelector('audio');
var trackItemList = [];

function ajax(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
                var resp = JSON.parse(request.response );
                //console.log(resp);
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
    //trackItemList.push(el);
    trackList.appendChild(trackItem);
    trackItem.innerHTML = el.title;
    trackItem.addEventListener('click', function() {
      console.log(el);
      playTrack(el);
    })
  });
  console.log(trackItemList);
};

function createNewPLaylist() {
  var playlistItem = document.createElement('li');
  var newPlaylist = playlists.appendChild(playlistItem)
  newPlaylist.innerHTML = 'new playlist';
}

function playTrack(track) {
  audio.setAttribute('src', track.path)
  audio.play();
};


addNewPlaylist.addEventListener("click", createNewPLaylist);
ajax('http://localhost:3000/playlists', displayPlaylist);
ajax('http://localhost:3000/playlist-tracks', displayTracks);
playEvent(playTrack);
