

//Task: Write a function to calculate the factorial of a given number.


function calculateFactorial(number){

    

    let fact = 1;  // 0! = 1 

    // from 1 till given number 

    for(let index = 1; index <= number; index++){


        fact = fact * index; // 1 * 1 => 1,  1*2 => 2, 2*3 => 6

    }

    // return fact;
     console.log("Factorial for the given number : " + fact);

}

 calculateFactorial(3);

//  let result = calculateFactorial(3);
//  console.log("Factorial for the given number : " + result);