/*
 Problem 4: Center-Aligned Triangle Pattern

 Create a function that prints a center-aligned triangle pattern of asterisks (*) 
 based on the input size. The size parameter determines the number of rows 
 in the triangle, and the function will output a center-aligned triangle made 
 of spaces and asterisks.

 Pattern Explanation:
 - The function generates a pattern where each row contains an increasing number 
   of asterisks centered within the total width.
 - The triangle has a base width and height equal to the input size.
 - The asterisks in each row are centered, with spaces padding the left and right 
   sides of the triangle.

 Sample Input (size = 5):
     *
    ***
   *****
  *******
 *********
 
 The input size controls the height of the triangle and determines how many 
 asterisks are printed in each row, while keeping the pattern centered.
*/

function printTriangle(size) {
  let col = size * 2 - 1;
  let result = '';

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= col; j++) {
      if (j >= size + 1 - i && j <= size - 1 + i) {
        result += '*';
      } else {
        result += ' ';
      }
    }
    result += '\n';
  }

  console.log(result);
}

printTriangle(5);
