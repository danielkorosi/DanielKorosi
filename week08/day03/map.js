'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.

var eNumber = fruits.map(function(item) {
  var wordsInLettters = item.split('');
  var counter = 0;
  wordsInLettters.forEach(function(letter) {
    if (letter === 'e') {
      counter += 1;
    }
  })
  return counter;
})

console.log(eNumber);
