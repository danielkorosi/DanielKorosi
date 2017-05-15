//Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
//Create a test for that.

var anagram = function(word1, word2) {
  if (word1.toLowerCase().split('').sort().join() === word2.toLowerCase().split('').sort().join()) {
    return true;
  } else {
    return false
  }
}

//console.log(anagram('asdf', 'dsfa'));

module.exports = anagram;
