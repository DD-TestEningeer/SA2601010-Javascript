

// What is array => to store multiple values 
// How to create array in Javascript 

let fruits = []; // empty array 

let colors = ["red", "yellow"]; // string 

let numbers = [11, 22, 33]; // numbers 

let status = [true, false, true]; // boolean 

// mixed data 

let mixedArray = ["dd", 22, true, null];


// How to access the array ? => using index

console.log(mixedArray);

console.log(mixedArray[2]);


// test data for username 

let usernames = ["user1", "user2", "user3"];

for(let index = 0; index < usernames.length; index++){


     console.log(usernames[index]);


}

// update array elements
usernames[0] = "demo";

console.log(usernames);

// push() => add element to the array in the end 
usernames.push("user4");
console.log(usernames);

// pop() => to array element from the end

usernames.pop();

console.log(usernames);

// includes()

console.log(usernames.includes("user4"));