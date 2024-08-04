// Create a function for Selection Sort

function selectionSort(arr) {
  // Get the length of the array
  let arrLength = arr.length;

  /*
       Outer loop: 
       - Initialize i = 0, starts from 0
       - Condition: i < arrLength - 1
         Example: If the array length is 6, then arrLength - 1 = 5
       - Increment: i is incremented in each iteration
      */
  for (let i = 0; i < arrLength - 1; i++) {
    // Assume the first unsorted element is the smallest
    let minIndex = i;

    /*
         Inner loop:
         - Initialize j = i + 1, starts from the next element after i
         - Condition: j < arrLength
           Example: If arrLength is 6 and i = 0, j starts from 1 and continues until j = 5
         - Increment: j is incremented in each iteration
        */
    for (let j = i + 1; j < arrLength; j++) {
      /*
           - Compare the current element arr[j] with the element at minIndex
           - If arr[j] is smaller than arr[minIndex], update minIndex to j
           Example:
             - If arr[j] = 4 and arr[minIndex] = 22:
               - minIndex is updated to j (index of 4)
          */
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    /*
         - After the inner loop, check if minIndex is different from i
         - If true, swap the elements at i and minIndex
           - Store the element at index i in a temporary variable
           - Assign the element at index minIndex to index i
           - Assign the value stored in the temporary variable to index minIndex
         Example:
           - If minIndex is 4 (value 1) and i is 0 (value 22):
             - temp = arr[i]; // temp = 22
             - arr[i] = arr[minIndex]; // arr[i] = 1
             - arr[minIndex] = temp; // arr[minIndex] = 22
        */
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

let arr = [22, 5, 4, 1, 3, 5];
console.log(selectionSort(arr)); // Output: [1, 3, 4, 5, 5, 22]
