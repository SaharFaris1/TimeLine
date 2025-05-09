document.getElementById("signupForm").addEventListener('submit', (event) => {
event.preventDefault()
}
)
 let username= document.getElementById("username").value
 let password= document.getElementById("password").value
 let confirmPassword= document.getElementById("confirmPassword").value
 let errorMessage = ""

 if (username.length < 5){
    errorMessage += "Username must more than 4 letters"
 }