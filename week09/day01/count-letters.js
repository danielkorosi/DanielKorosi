//Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
//Create a test for that.

var count = function(string) {
  var dictionary = {};
  letterList = string.split('').sort();

  letterList.forEach(function(letter) {
    if (letter in dictionary) {
      dictionary[letter]++;
    } else {
      dictionary[letter] = 1;
    }
  })
  return dictionary
}

console.log(count('countinggg'));
