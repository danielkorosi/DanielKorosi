var imageData = [
  {
    src: 'pic1.jpg',
    title: 'title1',
    description: 'description1',
  },
  {
    src: 'pic2.jpg',
    title: 'title2',
    description:'description2',
  },
  {
    src: 'pic3.jpg',
    title: 'title3',
    description:'description3',
  },
  {
    src: 'pic4.jpg',
    title: 'title4',
    description:'description4',
  },
  {
    src: 'pic5.jpg',
    title: 'title5',
    description:'description5',
  },
  {
    src: 'pic6.jpg',
    title: 'title5',
    description:'description6',
  }
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


function displayNext() {
  var mainPlace = document.querySelector('.mainimage');
  var imgDisplayed = document.createElement('img');
  imgDisplayed.setAttribute('src', imageData[indexPlus()].src);
  mainPlace.appendChild(imgDisplayed);
}
var i = 0;
function indexPlus() {
  i++;
  return i
}

function indexMinus() {
  i -= 1;
  return i
}

function displayPrevious() {
  var mainPlace = document.querySelector('.mainimage');
  var imgDisplayed = document.createElement('img');
  imgDisplayed.setAttribute('src', imageData[indexMinus()].src);
  mainPlace.appendChild(imgDisplayed);
}

var previous = document.querySelector('.previous');
var next = document.querySelector('.next');
previous.addEventListener('click', displayPrevious);
next.addEventListener('click', displayNext);
