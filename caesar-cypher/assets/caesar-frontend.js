'use strict';
var button = document.querySelector('button');
var body = document.querySelector('body');
var decodedBox = document.querySelector('.decodedBox');

var ajax = function(input, callback) {
    var request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/decode', true);
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(input));

    request.onreadystatechange = function () {

      if (request.readyState === 4 && request.status === 200) {
        var resp = JSON.parse(request.response);
        console.log(resp);
        callback(resp)
    }
  }
};

var displayDecoded = function(data) {
    var decoded = document.createElement('div');
    decodedBox.appendChild(decoded);
    decoded.innerHTML = data.text;
}

button.addEventListener(function() {
var shift = document.querySelector('input').value;
var text = document.querySelector('textarea').value;
var message = {
  shift: shift,
  text: text
}
  ajax(message, display)
})
