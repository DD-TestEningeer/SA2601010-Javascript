class Employee {
  // class

  constructor(name, id) {
    // constructor function
    this.emp_name = name;
    this.emp_id = id;
  }

  // getters and setters

  getEmpName() {
    // data validations here
    return this.emp_name;
  }

  getEmpID() {
    return this.emp_id;
  }

  setEmpName(empName) {
    // data access validations
    if (empName == null) {
      console.log("The provided value is null, please try again.");
    } else {
      // setting the value
      this.emp_name = empName;
    }
  }
}

let empObj1 = new Employee("Abhijit", 101);

console.log(empObj1.getEmpName());
console.log(empObj1.getEmpID());

empObj1.setEmpName(null);
empObj1.setEmpName("Shyam");
console.log(empObj1.getEmpName());
