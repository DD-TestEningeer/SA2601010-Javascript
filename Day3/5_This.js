

let studentObj = {


    name : "DD",
    id : 22,

    studentDetails : function (){ // method
        console.log(this.name); // refers to the same object 
        console.log(this.id);

    }


}


studentObj.studentDetails();