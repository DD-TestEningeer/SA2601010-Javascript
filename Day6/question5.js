// Assignment 5 : Count the Number of Words in a String
// Task: Write a function to count the number of words in a given string.

function countWords(givenString) {
  let modifiedString = givenString.trim(); // remove the white from start and end

  // "Welcome to JavaScript"

  let arr = modifiedString.split(" ");

  let wordsCount = arr.length;

  console.log("The words count from the given string is : " + wordsCount);
}


let givenString = "  Welcome to JavaScript Module "; // 3


countWords(givenString);