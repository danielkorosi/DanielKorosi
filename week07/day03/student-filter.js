'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
function moreCandies(list) {
  var names = [];
  list.forEach(function(e) {
    if (e.candies > 4) {
      names.push(e.name);
    }
  })
  return names
}
console.log(moreCandies(students));

// create a function that takes a list of students and logs:
//  - how many candies they have on average

function average(list) {
  var av = 0;
  var total = 0;
  list.forEach(function(e){
    total += e.candies;
    av = total / list.length;
  })
  return av
}
console.log(average(students));
