//Write a function that computes a member of the fibonacci sequence by a given index
//Create tests that covers all types of input (like in the previous workshop exercise)

'use strict';
var fibonacci = function(i){
  var a = 1;
  var b = 0;
  var temp;
  if (typeof i !== 'number') {
    return ('input is not a number')
  } else if (i < 0) {
      return ('no negative numbers allowed')
  } else {
    while (i >= 0){
      temp = a;
      a = a + b;
      b = temp;
      i--;
    }
  return b;
  }
}

console.log(fibonacci(-3));

module.exports = fibonacci;
