/* 
Problem 7
Create a function that takes an array of numbers as input and returns the largest number.
Sample Output:  
 let numbers1 = [1, 2, 3, 4, 5]; // Output: 5
*/

function findLargestNumber(numbers) {
  // let result = Math.max(...numbers);
  // return result;

  let result = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (result < numbers[i]) {
      result = numbers[i];
    }
  }
  return result;
}

let numbers1 = [1, 2, 3, 4, 5];
console.log(findLargestNumber(numbers1));
