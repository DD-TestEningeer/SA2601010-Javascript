class Vehicle {
  ride() {
    console.log("I'm using abc vehicle");
  }
}

class Car extends Vehicle {
  ride() {
    console.log("I'm using my own car");
  }
}


let myObj = new Car();

myObj.ride();

let myObj2 = new Vehicle();

myObj2.ride();