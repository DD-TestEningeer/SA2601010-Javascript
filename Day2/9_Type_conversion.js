


// Java 

const { type } = require("node:os");

// WebDriver driver = new ChromeDriver();




// implicitly type conversion 


let count  = 10; // number 
let nameVar = "DD"; // string 

let result;

result = nameVar + count;

console.log(typeof(result));
console.log(result);


let flagVar = false;
let url = "www.google.com"; 

console.log(flagVar + url);
console.log(typeof (flagVar + url));



// Explicit Conversion 

let count2 = "150"; // string 

console.log(count2+3); // 1503

let myNum = Number(count2);
console.log(myNum + 3); //


let flag  = "true"; // string
console.log(typeof(flag));

let myBool = Boolean(flag);

console.log(typeof(myBool));


