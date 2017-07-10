// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

'use strict';

var lineCount = 4;
var star = '';

for (var i = 0; i <= lineCount; i += 1) {

  star += '**';
  console.log(star);
}
