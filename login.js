
// Function to attach Google Sign-In to button
function attachSignin(element) {
    auth2.attachClickHandler(element, {},
        function (googleUser) {
            console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
            profile = googleUser.getBasicProfile();
            idToken = googleUser.getAuthResponse().id_token;
        },
        function (resolve) {
            console.resolve('resolve: ' + resolve);
        });
}
// Login form
document.getElementById('loginForm').addEventListener('sumbit', function (event) {
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

document.getElementById('logout-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = 'index.html';
});



