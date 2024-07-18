/* 
Problem 8
Create a function that takes a string as input and returns the number of vowels in the string.
Sample Output:  
let str1 = "Hello";
let str2 = "Javascript";

console.log(countVowels(str1)); // Output: 2
console.log(countVowels(str2)); // Output: 3

*/

function countVowels(str) {
  let vowels = "aeiou";
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result++;
    }
  }
  return result;
}

let str1 = "Hello";
let str2 = "Javascript";

console.log(countVowels(str1));
console.log(countVowels(str2));
