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
document.getElementById('loginForm').addEventListener('sumbit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
   let username = document.getElementById('login-username').value.trim();
    let password = document.getElementById('login-password').value.trim();
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');
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


document.addEventListener("DOMContentLoaded", function() {
    // Check if user is signed in (You can define your own logic here)
    let isSignedIn = localStorage.getItem('username') !== null;

    // Get the image element
    var profileImage = document.getElementById('signInImage');

    if (isSignedIn) {
        // If user is signed in, change the image source to the user photo
        profileImage.src = 'all products images/user-solid.svg';
    } else {
        // If user is not signed in, keep the default image or change it to a sign-in image
        profileImage.src = 'sign-up-icon-signup-square-box-on-transparent-background-free-png.webp';
    }
});



