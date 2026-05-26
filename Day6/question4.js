// Assignment 4 : Count Vowels from the given String

// Task: Count Vowels in a String

// a, e, i, o, u
// A, E, I, O, U

let vowelsString = "aeiouAEIOU";

let inputString = "Welcomeaaa"; // 3
let count = 0;

for (let index = 0; index < inputString.length; index++) {
  if (vowelsString.includes(inputString[index])) {
    count++;
  }
}

console.log("the vowels count : " + count);
