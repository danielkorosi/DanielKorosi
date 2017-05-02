'use strict';
// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

var lineCount = 4;
var star = '';
for (var i = 1; i <= lineCount; i += 1) {
  star += '*';
  console.log(star);
}
