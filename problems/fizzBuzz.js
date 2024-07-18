/* 
Problem 6

Write a function that prints the numbers from 1 to n. But for multiples of three,
print "Fizz" instead of the number and for the multiples of five, print "Buzz". 
For numbers which are multiples of both three and five, print "FizzBuzz".
Sample Output:  
 Output: 
 1
 2
 Fizz
 4
 Buzz
*/

function fizzBuzz(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }
    if (output === "") {
      output = i;
    }
    result += output + "\n";
  }
  return result;
}

console.log(fizzBuzz(20));
