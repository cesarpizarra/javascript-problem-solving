/* 
Problem 4

Create a function that check if palindrome
Sample Output: radar: is a palindrome

*/

function isPalindrome(str) {
  let result = "";
  // Remove all spaces and convert to lower case
  let replaced = str.replace(/\s+/g, "").toLowerCase();
  // Reverse the string
  let reversed = replaced.split("").reverse().join("");
  // Check if the reversed string is equal to the original string
  if (reversed === replaced) {
    result += `${str}: is a palindrome`;
  } else {
    result += `${str}: is not a palindrome`;
  }
  return result;
}

let word = "test";
console.log(isPalindrome(word));
