
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); 

}

function done() {
  console.log("Completed");
}

greet("QA", done);





function fun1(functionVar){

    console.log("this is function 1");

    functionVar();
}


function fun2(){

    console.log("this is function 2");

}


fun1(fun2);