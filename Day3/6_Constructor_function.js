

// constructor function - to create multiple objects 

function User(name, role) {
    this.name = name;
    this.role = role;
}


// Object 1
let user1 = new User("John", "QA");

// Object 2
let user2 = new User("Sam", "Tester");

console.log(user1);
console.log(user2);