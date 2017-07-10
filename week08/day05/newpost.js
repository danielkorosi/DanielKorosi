'use strict';

var postUrl = document.querySelector('.field_url');
var postTitle = document.querySelector('.title')
var button = document.querySelector('.action')


let createPost = function() {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://time-radish.glitch.me/posts', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');
  let message = {
    "title": postTitle.value,
    "href": postUrl.value
  }
  xhr.send(JSON.stringify(message));
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      window.location.href = "reddit.html";
    }
  }
}

button.addEventListener('click', createPost);
