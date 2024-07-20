/* 
Problem 9
Create a function named printIsEven that takes a 
sentence as input and returns an array of strings. 
Each string in the array should indicate whether the corresponding word in the sentence has an even or odd number of letters.

Sample Output:  
const str = "Print every word in this sentence that has an even number of letters";
[
  'Print => is even.',
  'every => is odd.',
  'word => is odd.',
  'in => is even.',
  'this => is odd.',
  'sentence => is even.',
  'that => is odd.',
  'has => is odd.',
  'an => is even.',
  'even => is even.',
  'number => is even.',
  'of => is even.',
  'letters => is odd.'
]
*/

function printIsEven(sentence) {
  let result = [];
  let words = sentence.split(" ");

  words.forEach((value) => {
    if (value.length % 2 === 0) {
      result.push(`${value} => is even.`);
    } else {
      result.push(`${value} => is odd.`);
    }
  });
  return result;
}
let str =
  "Print every word in this sentence that has an even number of letters";
console.log(printIsEven(str));
