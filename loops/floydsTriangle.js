/*
 Problem 3: Floyd's Triangle

Create a function that prints Floyd's Triangle up to the given number of rows.
Floyd's Triangle is a right-angled triangular pattern of consecutive numbers 
starting from 1. Each row contains an increasing number of elements, where the 
first row has one element, the second row has two elements, and so on.

Function Explanation:
- The function takes an integer input `rows`, which determines the number of rows 
  in the triangle.
- A `counter` variable starts at 1 and increments with each new number added to the 
  triangle.
- The outer loop represents each row, while the inner loop controls the number of 
  elements in that row.
- The triangle is built row by row with numbers separated by spaces.

Sample Input (rows = 5):
1  
2 3  
4 5 6  
7 8 9 10  
11 12 13 14 15  

The input controls the size of the triangle and determines how many rows are printed.
*/

function floydsTriangle(rows) {
  let counter = 1;
  let result = '';

  // Outer loop for rows
  for (let i = 0; i < rows; i++) {
    // Inner loop for elements in each row
    for (j = 0; j <= i; j++) {
      result += counter + ' '; // Add the counter value
      counter++; // Increment the counter
    }
    result += '\n'; // Move to the next line after each row
  }

  console.log(result); // Output the final triangle
}

floydsTriangle(5);
