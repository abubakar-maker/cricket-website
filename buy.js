document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('myForm').addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault(); 

        // Get form values
        var firstName = document.getElementById('first-name').value.trim();
        var lastName = document.getElementById('last-name').value.trim();
        var address = document.getElementById('address').value.trim();
        var postalCode = document.getElementById('postal-code').value.trim();
        var addres = document.getElementById('inputAddress2').value.trim();
        var city = document.getElementById('inputCity').value.trim();
        var state = document.getElementById('inputState').value.trim();

        // Check if all fields are filled
        if (firstName !== '' && lastName !== '' && address !== '' && postalCode !== '' && addres !== '' && city !== '' && state !== '') {
            // Save user information in localStorage
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('address', address);
            localStorage.setItem('postalCode', postalCode);
            localStorage.setItem('addres', addres);
            localStorage.setItem('city', city);
            localStorage.setItem('state', state);
            // Log to check if this part executes
            console.log('Form submitted successfully');
            // Redirect to index.html
            window.location.href = 'index.html';
        } else {
            // If any field is empty, show an alert
            alert('Please fill in all fields.');
        }

    });
});
