

// Why do we need functions ? => perform specific task 
// Different types of function 

// function - without parameters 
// function - with parameters 
// function - with return 
// function - arrow function 


// calculate the area of triangle 
// area  = 0.5 * b * h

function calculateTriangleArea(base, height){

    let area = 0.5 * base * height;

    console.log("The area of triangle with base " + base + " and height " + height + " is : "  + area);

}


calculateTriangleArea(10, 15);
calculateTriangleArea(5, 12);

// area = pi * r * r => 3.14
 let calculateAreaOfCircle = (radius) => {

    let area2 = 3.14 * radius * radius;

    console.log("The area of circle with radius " + radius + " is :" + area2);
}

calculateAreaOfCircle(10);
calculateAreaOfCircle(5);