'use strict';
// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`


//with built-in revrse method
var aj = [3, 4, 5, 6, 7];
var ajRev = aj.reverse();
console.log(ajRev);

//with decrementing for loop and push
var aj = [3, 4, 5, 6, 7];
var newArray = [];
for (var i = aj.length-1; i >= 0; i--){
  newArray.push(aj[i]);
}

//with simple for loop and unshift
var array3 = [];
for (var i = 0; i < aj.length; i++) {
  array3.unshift(aj[i])
}

console.log(newArray);
console.log(array3);
