'use strict';

// Handle the exceptions in the addString() function. It should check the type of the
// arguments, throw the right error and write it to the console.
// It should add the strings too if the arguments are appropriate.

let  addString = function(str1, str2, printStr){
  let newStr = str1 + str2;
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('at least one of the arguments is not a string')
  }
  printStr(newStr);
}

let printStr = function(str) {
  console.log(str);
}

addString(1234, 245234, printStr);
