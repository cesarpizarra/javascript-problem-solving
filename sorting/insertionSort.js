// Create a function for Insertion Sort
function insertionSort(arr) {
  // Get the length of the array
  let arrLength = arr.length;

  /*
       Outer loop:
       - Initialize i = 1, starts from 1 because the first element is considered sorted by itself
       - Condition: i < arrLength, the loop will run until the end of the array
       - Increment: i is incremented in each iteration
      */
  for (let i = 1; i < arrLength; i++) {
    /*
         - currentElement: The element at the current position i which will be inserted in the correct place
         - lastIndex: The index of the element just before the current position (i - 1)
        */
    let currentElement = arr[i];
    let lastIndex = i - 1;

    /*
         Inner loop (while loop):
         - Condition: lastIndex >= 0 (ensures we are within the bounds of the array)
         - Condition: arr[lastIndex] > currentElement (checks if the currentElement should be inserted before the element at lastIndex)
         - If true, shift the element at lastIndex one position to the right
         - Decrement lastIndex to continue checking previous elements
        */
    while (lastIndex >= 0 && arr[lastIndex] > currentElement) {
      arr[lastIndex + 1] = arr[lastIndex];
      lastIndex--;
    }

    /*
         After finding the correct position for the currentElement, insert it
         at the position lastIndex + 1
        */
    arr[lastIndex + 1] = currentElement;
  }

  return arr;
}

let arr = [22, 5, 4, 1, 3, 5];
console.log(insertionSort(arr)); // Output: [1, 3, 4, 5, 5, 22]
