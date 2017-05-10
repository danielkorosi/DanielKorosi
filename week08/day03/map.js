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

function eNumber(word) {
  var wordsInLettters = word.split('');
  var counter = 0;
  wordsInLettters.forEach(function(letter) {
    if (letter === 'e') {
      counter += 1;
    }
  })
  return counter;
}

var NumOfLetters = fruits.map(eNumber)
console.log(NumOfLetters);
