// Assignment 3: Find the Largest Number
// Task: Write a function to find the largest number in an array.

// let arr = [11, 33, 66, 99, 10]; // 99

// let largestNum = arr[0] = 11
// for loop
// element comparison
// update the largestNum
// return largestNum
// calling the function with arr

function findLargestNumber(arr) {
  let largestNum = arr[0]; // assume

  for (let index = 1; index < arr.length; index++) {
    if (largestNum < arr[index]) {
      largestNum = arr[index];
    }
  }

  return largestNum;
}

let arr = [11, 33, 66, 99, 10];

let result = findLargestNumber(arr);
console.log("The largest number is : "  + result);