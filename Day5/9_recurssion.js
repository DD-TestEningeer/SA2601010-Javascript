

function countDown(numberVar){

// stop condition 
    if(numberVar===0){
        return;
    }


    console.log(numberVar); // 10, 10, 10 ,................. infinite

    countDown(numberVar-1);

}

countDown(10);