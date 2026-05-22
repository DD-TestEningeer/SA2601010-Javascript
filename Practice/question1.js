// 1) Write a program to add given 2 numbers using Javascript

let num1 = 10;
let num2 = 20;
let sum = 0;

sum = num1 + num2;

console.log("the sum is : " + sum);


// function 

function addNumbers(number1, number2){

    let sum = number1 + number2;

    console.log("The sum is : " + sum);
}

addNumbers(11, 22);



function addNumbers2(number1, number2){

    let sum = number1 + number2;

   return sum;
}

let result = addNumbers2(111, 212);

 console.log("The sum is : " + result);