


function getMessage(name){

    console.log("Hello " + name);

}

getMessage("DD");


const arrowFun = (textData)=>{
    console.log(textData);
}

arrowFun("Hello and welcome to testing");



// return a valid email address 

const getEmail = (username)=>{

    let email = username + "@gmail.com";

    return email;
}

const myEmail = getEmail("DD-User");

console.log(myEmail);