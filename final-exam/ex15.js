//Create a function that takes a string and splits it to a list of two character strings like: "abcdef" becomes ["ab", "cd", "ef"]

function split(string) {
  let list1 = [];
  let list2 = [];

  for (let i = 0; i < string.length; i+=2) {
    list1.push(string[i])
  }

  for (let i = 1; i < string.length; i+=2) {
    list2.push(string[i])
  }

  for (let i = 0; i < list1.length; i+=1) {
    list1[i] += list2[i];
  }
  return list1
}

console.log(split('abcdef'));
