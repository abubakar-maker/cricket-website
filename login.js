document.getElementById('loginForm').addEventListener('submit', function (event) {
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
        var loginPara = document.getElementById('login-paragrah');
        loginPara.style.display = 'block';
        loginPara.style.color = 'red';
        loginPara.style.marginTop = '2px';
        loginPara.style.fontSize = '10px';
        loginPara.textContent = 'Please check Email and password';
    }
});
// Logout button

document.getElementById('logout-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = 'index.html';
});



