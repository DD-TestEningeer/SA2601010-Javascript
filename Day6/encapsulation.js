

class User {

  constructor(name, age) {
    
    let ageValue = age; // private variable

    this.name = name;

    this.getAge = function() {
      return ageValue;
    };

    this.setAge = function(newAge) {
      ageValue = newAge;
    };
  }
}

const user = new User("Sam", 20);

console.log(user.name);      // Sam
console.log(user.getAge());  // 20

user.setAge(25);

console.log(user.getAge());  // 25