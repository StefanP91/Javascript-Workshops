// Simple Login System (if credentials match)

let enterUsername=null; // field for enter username
let enterPassword=null; // field for enter password


adminUsername = "admin";
adminPassword = "adminpass";
userUsername = "user123";
userPassword = "password123";


if(enterUsername==null && enterPassword==null){
  console.log("");  
} 
else if((enterUsername==adminUsername && enterPassword==adminPassword) && (adminUsername=="admin" && adminPassword=="adminpass")){
    console.log("Welcome, Admin!");
}
else if((enterUsername==userUsername && enterPassword==userPassword) && (userUsername=="user123" && userPassword=="password123")){
    console.log("Welcome, User123!");
}
else{
    console.log("Invalid Username or Password.");
}


