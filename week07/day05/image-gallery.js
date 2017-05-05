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

imageData.forEach(function(el) {
  var thumbnailElems = document.createElement('img');
  thumbnailElems.setAttribute('src', el.src);
  thumbnailList.appendChild(thumbnailElems);
  console.log(thumbnailList);
})
