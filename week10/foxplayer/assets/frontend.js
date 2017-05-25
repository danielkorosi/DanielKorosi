'use strict';

var playlists = document.querySelector('.playlists');
var trackList = document.querySelector('.tracks');
var addNewPlaylist = document.querySelector('.left-add');
var audio = document.querySelector('audio');

function ajaxGet(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
                var resp = JSON.parse(request.response);
                console.log(resp);
                callback(resp);
            }
    }
    request.send();
}

/*function ajaxDelete(url, id) {
    var request = new XMLHttpRequest();
    request.open('DELETE', url + id, true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
                var resp = JSON.parse(request.response);
            }
    }
    request.send();
}*/


function displayPlaylist(data) {
  data.forEach(function(el) {
    var playlistItem = document.createElement('li');
    playlists.appendChild(playlistItem);
    console.log(el);
    playlistItem.className = 'playlist-item';
    var playlistText = document.createElement('div');
    playlistText.innerHTML = el.playlist;
    playlistItem.appendChild(playlistText);
    /*if (el.system === 0) {
      var deletePlaylist = document.createElement('div');
      deletePlaylist.className = 'delete-playlist';
      deletePlaylist.style.background = "url('delete.png')";
      playlistItem.appendChild(deletePlaylist);
      deletePlaylist.addEventListener('click', function() {
        ajaxDelete('http://localhost:3000/playlists-delete', el.id);
      })
    }*/
  });
};

function displayTracks(data) {
  data.forEach(function(el) {
    var trackItem = document.createElement('li');
    trackItem.className = 'trackBox';
    trackList.appendChild(trackItem);
    var trackId = document.createElement('div');
    trackId.innerHTML = el.id;
    trackItem.appendChild(trackId);
    var trackTitle = document.createElement('div');
    trackTitle.innerHTML = el.title;
    trackItem.appendChild(trackTitle);
    var duration = document.createElement('div');
    duration.className = 'track-time';
    var trackMin = trackMin = Math.floor(el.duration / 60);
    var trackSec = Math.floor(el.duration % 60);
    if (trackSec < 10) {
        trackSec = '0' + trackSec;
    }
    duration.innerHTML =  trackMin + ':' + trackSec;;
    trackItem.appendChild(duration);

    trackItem.addEventListener('click', function() {
      console.log(el);
      playTrack(el);
    })
  });
};

function createNewPlaylist() {
  var playlistItem = document.createElement('li');
  var newPlaylist = playlists.appendChild(playlistItem)
  newPlaylist.innerHTML = 'new playlist';
}

function playTrack(track) {
  audio.setAttribute('src', track.path)
  audio.play();
};

addNewPlaylist.addEventListener("click", createNewPlaylist);
ajaxGet('http://localhost:3000/playlists', displayPlaylist);
ajaxGet('http://localhost:3000/playlist-tracks', displayTracks);
