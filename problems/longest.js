/* 
Problem 10

Create a function named findLongestWord that takes a string of
words as input and returns the longest word in the string. If there
are multiple words with the longest length, return the first one encountered.


Sample Output:  
const text = "I love programming in JavaScript";
console.log(findLongestWord(text));
"programming"

*/

function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let currentWord = words[0];
  words.forEach((value) => {
    if (currentWord.length < value.length) {
      currentWord = value;
    }
  });

  return currentWord;
}
const text = "I love programming in JavaScript";

console.log(findLongestWord(text));
