'use strict';
// - Create an array variable named `ag` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

 var ag = ['Gin', 'Whiskey', 'Wine', 'Beer'];

 ag = ag.map(function(element) {
   element += element
   return element
 })
 console.log(ag);

ag.forEach(funciton(el)v{
  el + el
  console.log(ag)
})
