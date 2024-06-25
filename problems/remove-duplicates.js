/* 
Problem 3

Create a function that removes duplicate elements from an array.
The function should return a new array containing only the unique 
elements from the original array. 

Sample Output after removed duplicates: ["apple", "mango", "orange"]
*/
function removeDuplicates(arr) {
  let unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
// console.log(removeDuplicates(arr));
