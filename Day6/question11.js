let username = "Admin";
let password = "1234";

function loginStatus(user, pass) {
  if (user == username && pass == password) {
    console.log("Login success");
  } else {
    console.log("Login failed");
  }
}

loginStatus("Admin", "2222");
