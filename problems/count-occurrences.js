/* 
 Problem 2

Create a function that counts the occurrences of each letter
in an array of letters. The function should return an object where
the keys are the letters and the values are their respective counts.
  
  Sample Output: {"a": 2, "b": 1, "c": 2}
  
  */
const getLength = (letters) => {
  const letterCounts = {};

  letters.forEach((letter) => {
    if (letterCounts[letter]) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
  });

  return letterCounts;
};

const letters = ["a", "a", "b", "c", "c"];
// console.log(getLength(letters));
