// javascript object

const { json } = require("node:stream/consumers");

let emp = {
  emp_name: "DD",
};

// json string 

let jsonString = JSON.stringify(emp);

console.log(jsonString);

// jsonstring to object 

let obj = JSON.parse(jsonString);
console.log(obj);