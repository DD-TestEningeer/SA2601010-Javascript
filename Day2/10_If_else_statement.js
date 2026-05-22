// Problem  = Given 2 number num1 and num2 find the greatest number

let num1 = 10;
let num2 = 20;


// if only
if (num1 > num2) {
  console.log("Num1 is greater");
}

// if else 
if (num1 > num2) {
  console.log("Num1 is greater");
} else {
  console.log("Num2 is greater");
}


// if else if 
if (num1 > num2) {
  console.log("Num1 is greater");
} else if (num1 == num2) {
  console.log("Num1 and Num2 are equals");
} else {
  console.log("Num2 is greater");
}

// nested if else

if (num1 > num2) {
  console.log("Num1 is greater");

  if (num1 > 100) {
    console.log("Num1 is greater than 100");
  }
} else {
  console.log("Num2 is greater");
}
