

//  Write a program to check whether login is successful or failed.

// valid user => DemoUser
// valid pass => Test1234


function validateLogin(username, password){

    if(username==="DemoUser" && password === "Test1234" ){

        console.log("Login success");

    }else{

        console.log("Login failed");
    }

}

validateLogin("InvalidUser", "Test1234");
validateLogin("InvalidUser", "InvalidPass");