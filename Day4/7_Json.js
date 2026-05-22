// Json - JavaScript Object Notion

let jsonData = '{"name":"John","role":"QA"}'; // json string 

console.log(typeof(jsonData)); // 

// JSON string to the JavaScript Object 
// Why ? => perform any operations, easy using Javascript object

let jsObj = JSON.parse(jsonData); // Javascript object

console.log(typeof(jsObj)); // object

console.log(jsObj);
console.log(jsObj.name);


// convert js Object to Json string 

let jsonString = JSON.stringify(jsObj);

console.log(typeof(jsonString));