

class College{ // Parent class

    // method 
    attendCollege(){
        console.log("I'm attending college");
    }

}


class Student extends College{   // Child class


    // method 
    study(){

        console.log("I'm studding....");
    }

}


// Object 

let studentObj = new Student();

studentObj.attendCollege(); // parent
studentObj.study();  // child