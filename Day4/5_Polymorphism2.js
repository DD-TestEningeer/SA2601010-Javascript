

class Animal{

    bark(){

        console.log("I'm barking....");
    }

}


class Cat extends Animal{

    bark(){

        console.log("maw mawww......");
    }

}

let catObj= new Cat();

catObj.bark();