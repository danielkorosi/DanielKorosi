var thumbnailList = document.querySelector('.thumbnailList');

imageData.forEach(function(el) {
  var thumbnailElems = document.createElement('img');
  thumbnailElems.setAttribute('src', el.src);
  thumbnailElems.setAttribute('class', 'thumbnail')
  thumbnailList.appendChild(thumbnailElems);
  console.log(thumbnailList);
});

var i = 0;
function displayNext() {
  var mainPlace = document.querySelector('.mainimage');
  if (i === imageData.length-1) {
    mainPlace.style.backgroundImage = 'url('+imageData[0].src+')';
    i = 0;
  } else {
    mainPlace.style.backgroundImage = 'url('+imageData[++i].src+')';
  }
};

function displayPrevious() {
  var mainPlace = document.querySelector('.mainimage');
  if (i === 0) {
    mainPlace.style.backgroundImage = 'url('+imageData[imageData.length-1].src+')';
    i = imageData.length-1;
  } else {
    mainPlace.style.backgroundImage = 'url('+imageData[--i].src+')';
  }
};

var previous = document.querySelector('.previous');
var next = document.querySelector('.next');
previous.addEventListener('click', displayPrevious);
next.addEventListener('click', displayNext);
