document.getElementById("signupForm").addEventListener('submit', (event) => {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = "";


    if (username.length < 5) {
        errorMessage += "Username must be more than 4 letters.";
    }

    if (password.length < 4) {
        errorMessage += "Password must be more than 3 letters.";
    }

    if (password !== confirmPassword) {
        errorMessage += "Passwords do not match.";
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert("Form submitted successfully!");
      
    }
});

let input = document.getElementById('fullName');
let btn = document.getElementById('btn');

document.getElementById("signupForm").addEventListener('submit', (event) => {
    event.preventDefault();

    let fullName1 = input.value;
    let email = document.getElementById('username').value;

  
    localStorage.setItem("fullName", fullName1);
    localStorage.setItem("email", email);

  
    window.location.href = "profile.html";  
});

