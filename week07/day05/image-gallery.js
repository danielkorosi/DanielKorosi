'use strict';
var imageData = [
  {
    src: 'img1.jpg',
    title: 'title1',
    description: 'description1',
  },
  {
    src: 'img2.jpg',
    title: 'title2',
    description:'description2',
  },
  {
    src: 'img3.jpg',
    title: 'title3',
    description:'description3',
  },
  {
    src: 'img4.jpg',
    title: 'title4',
    description:'description4',
  },
  {
    src: 'img5.jpg',
    title: 'title5',
    description:'description5',
  },
]

var thumbnailList = document.querySelector('.thumbnailList');
var mainPlace = document.querySelector('.mainimage');
var previous = document.querySelector('.previous');
var next = document.querySelector('.next');
var i = 0;

function createThumbnails() {
  imageData.forEach(function(el) {
    var thumbnailElems = document.createElement('img');
    thumbnailElems.setAttribute('src', el.src);
    thumbnailElems.setAttribute('class', 'thumbnail')
    thumbnailList.appendChild(thumbnailElems);
  })
}

function imageFill() {
  mainPlace.style.backgroundImage = 'url('+imageData[i].src+')';
};

function display(increment) {
  i += increment;
  if (i === imageData.length) {
    i = 0;
  } else if (i === -1) {
    i = imageData.length-1;
  }
imageFill(i)
}

createThumbnails()
previous.addEventListener('click', function(){
  display(-1);
});
next.addEventListener('click', function(){
  display(+1);
});
