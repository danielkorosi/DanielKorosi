//Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
//Create a test for that.

function Anagram(word1, word2) {
  if (word1.split('').sort().join() === word2.split('').sort().join()) {
    return true;
  } else {
    return false
  }
}

console.log(Anagram('asdf', 'dsfa'));
