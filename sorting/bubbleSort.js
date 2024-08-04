// Create a function for Bubble Sort
function bubbleSort(arr) {
  // Get the length of the array
  let arrLength = arr.length;

  /*
     Outer loop: 
     - Initialize i = 0, starts from 0
     - Condition: i < arrLength - 1
       Example: If the array length is 5, then arrLength - 1 = 4
     - Increment: i is incremented in each iteration
    */
  for (let i = 0; i < arrLength - 1; i++) {
    /*
       Inner loop:
       - Initialize j = 0, starts from 0
       - Condition: j < arrLength - i - 1
         Example: If arrLength is 5, when i = 0, the condition becomes 5 - 0 - 1 = 4
         As i increases, the range of j decreases because the largest unsorted elements are moved to their correct positions
       - Increment: j is incremented in each iteration
      */
    for (let j = 0; j < arrLength - i - 1; j++) {
      /*
         - Check if the element at index j is greater than the element at index j + 1
         - If true, swap the elements:
           - Store the element at index j in a temporary variable
           - Assign the element at index j + 1 to index j
           - Assign the value stored in the temporary variable to index j + 1
         Example:
           If arr[j] = 30 and arr[j + 1] = 22:
           - temp = arr[j]; // temp = 30
           - arr[j] = arr[j + 1]; // arr[j] = 22
           - arr[j + 1] = temp; // arr[j + 1] = 30
        */
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [10, 30, 22, 4, 1];
console.log(bubbleSort(arr));
