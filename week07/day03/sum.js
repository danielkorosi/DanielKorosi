'use strict';
// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(p) {
  var amount = 0;
    for (var n = 1; n < p; n += 1) {
      amount += n;
  }
  return amount;
}
console.log(sum(6));
