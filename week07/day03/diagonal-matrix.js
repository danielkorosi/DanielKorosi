'use strict';
// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

var matrix = []

for (var i = 0; i < 4; i++) {
  matrix[i] = [];
  for (var j = 0; j<4; j++) {
    matrix[i][j] = 0;
    if ( i === j) {
      matrix[i][j] = 1
    }
  }
}


console.log(matrix);
