// Assignment 2: Array Sum

// Task: Write a function to calculate the sum of all elements in an array.

// let arr = [10, 20, 30]; // 10 + 20 + 30 => 60

// for loop for iterating over the array

function calculateSum(arr) {
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }

  return sum;
}

let myArr = [11, 22, 33, 44, 55];

let result = calculateSum(myArr);
console.log("The array sum is : " + result);
