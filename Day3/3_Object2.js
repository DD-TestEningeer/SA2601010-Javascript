

let myObj = {

    myNum : 99,
    myString : "QA Tester",
    myBoolean : false,
    myDecimal:  12.55,
    myNull : null,
    myArray : [11, 22, 33],
    myInnerObj : { username : "DemoUser"},
    myFunction : function demoFun(){
        console.log("This is the inner function");
    }

}


console.log(myObj);

console.log(myObj.myNum);
console.log(myObj.myDecimal);
console.log(myObj.myBoolean);
console.log(myObj.myString);
console.log(myObj.myNull);
console.log(myObj.myArray);


console.log(myObj.myInnerObj.username);
console.log(myObj["myInnerObj"]["username"]);


myObj.myFunction();