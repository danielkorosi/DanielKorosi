'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a 'numChecker' function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

var listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];

function numChecker(list){
  var counter = 0;
  listOfNumbers.forEach(function(el){
    if (el === 4 || el === 8 || el === 12 || el === 16) {
      counter += 1;
    }
  })
  if (counter >= 4) {
    return true
  } else {
    return false
  }
}

console.log(numChecker(listOfNumbers));
