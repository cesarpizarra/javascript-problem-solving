/* 
Problem 11
Create a function named countCharacter that takes a string and a character as 
input and returns the number of times the character appears in the string. 
The function should be case-sensitive.


Sample Output:  
const text = "Hello World";
const char = 'o';
console.log(countCharacter(text, char));
2


*/

function countCharacter(str, char) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (char.includes(str[i])) {
      result++;
    }
  }
  return result;
}

const text = "Hello World";
const char = "o";
console.log(countCharacter(text, char));
