//Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
//Create a test for that.
'use strict';

var count = function(string) {
  var dictionary = {};
  var letterList = string.toLowerCase().split('').sort();

  letterList.forEach(function(letter) {
    if (letter !== ' ') {
      if (letter in dictionary) {
        dictionary[letter]++;
      } else {
        dictionary[letter] = 1;
      }
    }
  })
  return dictionary
}

console.log(count('Zz top'));

module.exports = count;
