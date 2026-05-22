

// What is Object in JavaScript => Variable to store multiple values in the form of key-value pairs 

// How to create the object in JavaScript?

let empObj = {
    emp_id : 101,
    emp_name : "Rohit",
    emp_role : "QA Automation Tester",
    emp_department: "IT",
    emp_status : true
}

// How to print the object data 
console.log(empObj);

// How to access the Object data 

console.log(empObj.emp_id);
console.log(empObj.emp_name);
console.log(empObj.emp_role);
console.log(empObj.emp_department);
console.log(empObj.emp_status);


console.log(empObj["emp_id"]);
console.log(empObj["emp_name"]);