// Signup form
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    var username = document.getElementById('signup-username').value.trim();
    var password = document.getElementById('signup-password').value.trim();
    if (username !== '' && password !== '') {
        // Check if email ends with "@gmail.com"
        if (username.endsWith('@gmail.com')) {
            // Save user data in localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        
           alert("you are sign up into the website")
            window.location = 'index.html';
        } else {
    var incorrect = document.getElementById('incorrect-para');
    incorrect.style.display = 'block';
    incorrect.style.color = 'red'
    incorrect.style.marginTop = '2px'
    incorrect.style.fontSize = '10px'
    incorrect.textContent = 'Please Enter a valid gmail';

    }
    }
});
function myFunction() {
    var x = document.getElementById("signup-password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
// Logout button

document.getElementById('logout-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = 'index.html';
});



