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
console.log(thumbnailList);

//create thumbnails

imageData.forEach(function(el) {
  var thumbnailElems = document.createElement('img');
  thumbnailElems.setAttribute('src', el.src);
  thumbnailElems.setAttribute('class', 'thumbnail')
  thumbnailList.appendChild(thumbnailElems);
  console.log(thumbnailList);
})

//display next image
function displayNext() {
  var mainPlace = document.querySelector('.mainimage');
  mainPlace.style.backgroundImage = 'url('+imageData[indexPlus()].src+')';
  mainPlace.textContent(imageData[indexPlus()].title)
}

//display previous image
function displayPrevious() {
  var mainPlace = document.querySelector('.mainimage');
  mainPlace.style.backgroundImage = 'url('+imageData[indexMinus()].src+')';
}
//helping variable
var i = 0;
function indexPlus() {
  i++;
  return i
}

function indexMinus() {
  i -= 1;
  return i
}

//click handling
var previous = document.querySelector('.previous');
var next = document.querySelector('.next');
previous.addEventListener('click', displayPrevious);
next.addEventListener('click', displayNext);

//var thumbnail = document.querySelectorAll('p.thumbnail');

//thumbnail.forEach(function(el) {
//  el.addEventListener('click', displayThumbnail();
//}
