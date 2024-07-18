/* 
Problem 5

Create a function that takes a sentence as input and 
returns the sentence with the words in reverse order.

Sample Output:  Output: "World Hello"
*/

function reverseWord(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

const sentence1 = "Hello World";

console.log(reverseWord(sentence1));
