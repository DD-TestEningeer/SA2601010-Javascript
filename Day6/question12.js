function UserRole(role){

switch (role){

    case "Admin":
        console.log("You have Admin access");
        break;          
    case "Tester":
        console.log("You have Testing access");
        break;
    case "Developer":
        console.log("You have Developer access");
        break;

    default:
        console.log("No Access Role Found, please provide correct role");
}

// return "Role Access Process Completed";

}


UserRole("Admin"); // unit testing 
UserRole("Tester");
UserRole("Developer");
UserRole("Scrum Master");
