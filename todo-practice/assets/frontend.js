'use strict';
var listBox = document.querySelector('.list-elements');
var button = document.querySelector('button');

var ajax = function(method, url, callback) {
  var xhr = new XMLHttpRequest();
  var inputText = document.querySelector('input').value;

  var message = {
    text: inputText,
    completed: false
  };

  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
      if (xhr.status === 200) {
              var response = JSON.parse(xhr.response);
              console.log(response);
                callback(response);

          } else {
            console.log('error:' + xhr.status);
          }
  };

  if (message.text) {
    xhr.send(JSON.stringify(message))
    console.log('message exist');
  } else {
    console.log('message does not exist');
    xhr.send();
  }
};

var display = function(data) {
    listBox.innerHTML = '';
    data.forEach(function(el) {
      var itemBox = document.createElement('div')
      itemBox.className = 'itemBox';
      listBox.appendChild(itemBox);

      var text = document.createElement('div');
      text.className = 'text';
      text.innerHTML = el.text;
      itemBox.appendChild(text);

      var trashIcon = document.createElement('div');
      trashIcon.className = 'trash-icon';
      itemBox.appendChild(trashIcon);
      var doneField = document.createElement('div');
      doneField.className = 'doneField';
      itemBox.appendChild(doneField);
    })
};

ajax('GET', 'http://localhost:3000/todos', display);

button.addEventListener('click', function() {
    ajax('POST', 'http://localhost:3000/todos', display);
  });



//ajax('GET', 'http://localhost:3000/todos/1');
