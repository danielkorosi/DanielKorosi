'use strict';

var ajaxGet = function(method, url) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
              var resp = JSON.parse(xhr.response);
              console.log(resp);
              //callback(resp);
          }
  }
  xhr.send();
}

//ajaxGet('GET', 'http://localhost:3000/todos')
ajaxGet('GET', 'http://localhost:3000/todos/1')
