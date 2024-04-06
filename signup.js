// Function to initialize Google Sign-In
function initGoogleSignIn() {
    gapi.load('auth2', function() {
        auth2 = gapi.auth2.init({        
    client_id: 'randomclientid',
            cookiepolicy: 'https://www.googleapis.com/auth/plus.login'
        });
        attachSignin(document.getElementById('google-login-btn'));
    });
}
let profile;
let idToken
// Function to attach Google Sign-In to button
function attachSignin(element) {
    auth2.attachClickHandler(element, {},
        function(googleUser) {
            console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
          profile = googleUser.getBasicProfile();
            idToken = googleUser.getAuthResponse().id_token;
        },
        function(resolve) {
            console.resolve('resolve: ' + resolve);
        });
}

// Load Google Platform Library
(function() {
    var e = document.createElement('script');
    e.src = 'https://apis.google.com/js/platform.js?onload=initGoogleSignIn';
    e.async = true;
    document.getElementById('google-login-btn').appendChild(e);
})();
 

// const loggin = document.getElementById('login');
// loggin.addEventListener('click',()=>{
//         window.location = 'index.html'
//         alert("you are logged into the website");
//  })
//  const sing = document.getElementById('sign');
// sign .addEventListener('click',()=>{
//         window.location = 'index.html'
//         alert("you are singged into the website");
       
//  })


  // Signup form
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    var username = document.getElementById('signup-username').value.trim();
    var password = document.getElementById('signup-password').value.trim();
    if (username !== '' && password !== '') {
        // Check if email ends with "@gmail.com"
        if (username.endsWith('@gmail.com')) {
            // Save user data in localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Signup successful');
            window.location='index.html';
        } else {
            alert('Please enter a valid Gmail address.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

// Login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    var username = document.getElementById('login-username').value.trim();
    var password = document.getElementById('login-password').value.trim();
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
        alert('Logged in successfully');
        // Redirect to dashboard or home page
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password.');
    }
});

// Logout button

document.getElementById('logout-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = 'index.html';
});

function simulateLogin() {
    // Check if user is signed in (you may use localStorage or session storage for this check)
    var isSignedIn = true; // For demonstration purpose, assuming the user is signed in

    if (isSignedIn) {
        // Get user's photo URL from somewhere (e.g., localStorage or an API)
        var userPhotoURL = localStorage.getItem('userPhotoURL'); // Assuming you stored the user's photo URL upon successful login

        // Update the src attribute of the sign-in image
        document.getElementById('signInImage').src = 'all products images/user-solid.svg';
    }
}
