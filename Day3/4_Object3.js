

let testData = {
    username : "Demo User",
    password : "Test1234",
    url : "www.google.com"
}

// how to print object 

console.log(testData);


// how to access the username using dot operator 
console.log(testData.username);

// update the username 
testData.username = "Real User";
console.log(testData.username);
console.log(testData);


// add property to the object 
testData.org_name = "abc org";
console.log(testData);

// Delete Property

delete testData.org_name;
console.log(testData);