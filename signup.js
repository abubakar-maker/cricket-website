// Function to initialize Google Sign-In
function initGoogleSignIn() {
    gapi.load('auth2', function() {
        auth2 = gapi.auth2.init({
            client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin'
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
if(profile==true){
    alert("you are logged in")
}