//Create a function that returns how many letters in the word: "duck" (it is four)

function letterCount(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    count++
  }
  return count
}
console.log(letterCount('duck'));
