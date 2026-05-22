class User { // User is the class name
    constructor(name) { // construction function - value initialization 
        this.name = name;
    }


getName() { // getter method
    return this.name; 
}

}


let user1 = new User("John"); // object 


console.log(user1.getName());