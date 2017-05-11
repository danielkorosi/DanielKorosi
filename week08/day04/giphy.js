let fox = new XMLHttpRequest();
fox.open('GET', 'http://api.giphy.com/v1/gifs/search?q=fox&api_key=dc6zaTOxFJmzC', true);
fox.send();

var pictures = document.querySelector('div');

fox.onreadystatechange = function () {
 if (fox.readyState === 4 && fox.status === 200) {
    var resp = JSON.parse(fox.response);
    for (var i = 0; i < 16; i++) {
      var onePic = document.createElement('img');
      onePic.setAttribute('src', resp.data[i].images.original_still.url);
      pictures.appendChild(onePic)
    }
  }
}
