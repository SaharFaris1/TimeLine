let fullName = localStorage.getItem('fullName');
let email = localStorage.getItem('email');

if (fullName) {
    document.getElementById('profileName').textContent = fullName;
}
if (email) {
    document.getElementById('profileEmail').textContent =  email;
}