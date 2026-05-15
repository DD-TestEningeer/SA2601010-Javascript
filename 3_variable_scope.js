// local variable 
// global variable 

// Local Variable - scope is limited to the function/block


function test (){
let username = "DemoUser";
let password = "Test12345";
let url = "www.demosite.com";

}

// console.log(username);




// Global Variable - declared outside of the function/block



let count = 10;


function countValues (){

    console.log(count);
}

countValues();
 console.log(count);