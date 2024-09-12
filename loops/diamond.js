/*
 Problem 2: Diamond Shape Pattern

Create a function that prints a diamond-shaped pattern of asterisks (*) 
based on the input size. The size parameter determines the number of rows 
in the upper half of the diamond, and the function will output a symmetrical 
diamond made of spaces and asterisks.

Pattern Explanation:
- The function creates a pattern with an upper and lower half, both forming 
  a diamond-like shape.
- The upper half includes the middle row, and the lower half excludes it.
- The middle of the diamond has the widest part, and both halves gradually 
  taper down.

Sample Input (size = 3):
     *
    ***
   *****
    ***
     *

The input size controls the width and height of the pattern.
*/

function printDiamond(size) {
  let col = size * 2 - 1;
  let result = '';

  // Upper half (including the middle)
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

  // Lower half (excluding the middle row)
  for (let i = size - 1; i >= 1; i--) {
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

printDiamond(3);
