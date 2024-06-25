/*
 Problem 1

Create a function that alternates the capitalization of 
each letter in a string. The function should return a new string 
where the letters at even indices are uppercase and the letters at
odd indices are lowercase.

 Sample Output: JaVaScRiPt
*/

const alternateCapitalLetter = (str) => {
  return [...str]
    .map((value, index) => {
      if (index % 2 === 0) {
        return value.toUpperCase();
      } else {
        return value.toLowerCase();
      }
    })
    .join("");
};

const word = "javascript";
// console.log(alternateCapitalLetter(word));
