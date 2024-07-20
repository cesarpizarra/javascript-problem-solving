/* 
Problem 12

Create a function named sumOfDigits that takes a positive integer as
input and returns the sum of its digits.


Sample Output:  
const number = 12345;
console.log(sumOfDigits(number));
15


*/

function sumOfDigits(number) {
  // Convert number to array
  const numberArray = number.toString().split("").map(Number);

  let result = numberArray.reduce(
    (prevVal, currentVal) => prevVal + currentVal,
    0
  );
  return result;
}

const number = 12345;
console.log(sumOfDigits(number));
