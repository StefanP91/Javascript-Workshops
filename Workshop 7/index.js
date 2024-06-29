
function loginValidation(event){
    event.preventDefault();

    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' }
    ];
    
    let username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const errorUsername = document.getElementById("errorMessageUsername");
    const errorPassword = document.getElementById("errorMessagePassword");

    let user = users.find(u => u.username === username);
    const pass = users.find(u => u.password === password);

    let allInputSuccess = true;

    if (user && user.username === username) {
        errorUsername.innerText = "";
        errorUsername.style.border = "none";
    } 

    else {
        errorUsername.innerText = "Invalid username";
        errorUsername.style.border = "1px solid red";
        allInputSuccess = false;
    }

    if (pass && user.password === password){
        errorPassword.innerText = "";
        errorPassword.style.border = "none"; 
    }

    else{
        errorPassword.innerText = "Invalid password";
        errorPassword.style.border = "1px solid red";
        allInputSuccess = false;
    }

    if (allInputSuccess) {
        document.querySelector("form").reset()
        let myModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
        myModal.show();

        let welcomeModalTitle = document.getElementById("welcomeTextTitle");
        welcomeModalTitle.innerText = `Welcome, ${username}!`;
    } 
      
}
