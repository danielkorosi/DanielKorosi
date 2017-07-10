var test = require('tape');

// sudoku validator
//
// [0,0,0,4,5,6,7,8,9] => ok
// [9,0,0,4,5,6,7,8,9] => Should fail
// [1,2,3,4,5,6,7,8,9] => ok
// [2,1,3,4,5,6,7,8,9] => ok
// [9,8,7,6,5,1,2,4,9] => Should fail
// [9,8,7,6,5,1,2,4,'u'] => Shold fail (non integer)

//var duplicated = [2,2,3,4,5,6,7,8,9];
//var order = [2,1,3,4,5,6,7,8,9];

function validator(x) {
  if (x.length === 9) {
    return true;
  }
}

test('first test', function(t) {
  t.equ
})
