


let globalVar = 100;

function testData(){

    let localVar = 20;

    console.log(globalVar);
    console.log(localVar);

    if(true){

    let blockVar = 33;
     console.log(blockVar);
    }

     console.log(blockVar);

}

    console.log(globalVar);
    // console.log(localVar);

testData();