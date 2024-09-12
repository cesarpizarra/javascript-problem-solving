/*
 Problem 4: Hollow Square

Create a function that prints a hollow square of a given size. The square should 
be made up of asterisks (*) with the outer border filled and the inside empty.

Function Explanation:
- The function takes an integer input `size`, which determines the dimensions 
  of the square (the number of rows and columns).
- The outer loop iterates over each row, while the inner loop iterates over each 
  column in that row.
- For the border of the square (i.e., the first and last rows and columns), 
  an asterisk (*) is added.
- For the inside of the square, spaces are added.
- After processing each row, a newline character is appended to move to the next 
  row.

Sample Input (size = 5):
*****
*   *
*   *
*   *
*****

The input controls the size of the square and determines how many rows and columns 
are printed.
*/

function hollowSquare(size) {
  let result = '';

  // Outer loop for rows
  for (let i = 0; i < size; i++) {
    // Inner loop for columns
    for (j = 0; j < size; j++) {
      // Print '*' for borders, otherwise print space
      if (i <= 0 || i >= size - 1 || j <= 0 || j >= size - 1) {
        result += '*';
      } else {
        result += ' ';
      }
    }
    result += '\n'; // Move to the next line after each row
  }

  console.log(result); // Output the final hollow square
}

hollowSquare(5);
