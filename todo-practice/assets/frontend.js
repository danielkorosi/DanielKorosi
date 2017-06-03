'use strict';
var listBox = document.querySelector('.list-elements');
var addButton = document.querySelector('.button');

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

var ajaxDelete = function(url, id) {
  var xhr = new XMLHttpRequest();

  xhr.open('DELETE', url+id, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
      if (xhr.status === 200) {
              var response = JSON.parse(xhr.response);
              console.log(response);
          } else {
            console.log('error:' + xhr.status);
          }
  };
    xhr.send();
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
      trashIcon.addEventListener('click', function() {
        ajaxDelete('http://localhost:3000/todos/', el.id)
        listBox.removeChild(itemBox);
      })

      var emptyField = document.createElement('div');
      emptyField.className = 'empty-field';
      itemBox.appendChild(emptyField);
    })
};


ajax('GET', 'http://localhost:3000/todos', display);

addButton.addEventListener('click', function() {
    ajax('POST', 'http://localhost:3000/todos', display);
  });



//ajax('GET', 'http://localhost:3000/todos/1');
