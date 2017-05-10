'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
  console.log(num);
}

function selectLastEvenNumber(array, printing) {
  var result;
  array.forEach(function(el) {
    if (el % 2 === 0) {
      result = el;
    }
  })
  printing(result)
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8
