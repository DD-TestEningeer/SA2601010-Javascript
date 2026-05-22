


// construction function 
 function Employee (emp_id, emp_name){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
 }

 // create the object 
 let empObj1 = new Employee(12, "DD1"); 
 let empObj2 = new Employee(13, "DD13"); 

 console.log(empObj1);
 console.log(empObj1.emp_name);

 empObj1.emp_name = "Demo user";
  console.log(empObj1.emp_name);