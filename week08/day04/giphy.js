var fox = new XMLHttpRequest();
fox.open('GET', 'http://api.giphy.com/v1/gifs/search?q=fox&api_key=dc6zaTOxFJmzC', true);
fox.send();

var pictures = document.querySelector('div');

fox.onreadystatechange = function () {
 if (fox.readyState === 4 && fox.status === 200) {
    var resp = JSON.parse(fox.response);
    console.log(resp);
    var picData = resp.data;
    picData.forEach(function(el) {
      var onePic = document.createElement('img');
      onePic.setAttribute('src', el.images.original_still.url);
      pictures.appendChild(onePic);
      onePic.addEventListener('click', function() {
        onePic.setAttribute('src', el.images.original.url);
      })
    })
  }
};

/*for (var i = 0; i < 16; i++) {
  var onePic = document.createElement('img');
  onePic.setAttribute('src', resp.data[i].images.original_still.url);
  pictures.appendChild(onePic);
  onePic.addEventListener('click', function() {
    onePic.setAttribute('src', x.data[i].images.original.url);*/


/*function display(x) {
  for (var i = 0; i < 16; i++) {
    var onePic = document.createElement('img');
    onePic.setAttribute('src', x.data[i].images.original_still.url);
    pictures.appendChild(onePic);
    onePic.addEventListener('click', function() {
      onePic.setAttribute('src', x.data[i].images.original.url);
    });
  }
};

function startGif(z) {
  //for (var j = 0; j < 16; j++) {
    //var onePic = document.createElement('img');
    z.setAttribute('src', z.data[i].images.downsized_medium.url);
    //pictures.appendChild(y)
  //}
}*/
