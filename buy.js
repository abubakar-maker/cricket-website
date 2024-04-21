document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('myForm').addEventListener('click', function (event) {
        event.preventDefault(); 

        // Get form values
        var firstName = document.getElementById('first-name')
        var lastName = document.getElementById('last-name')
        var address = document.getElementById('address')
        var postalCode = document.getElementById('postal-code')
        var addres = document.getElementById('inputAddress2')
        var city = document.getElementById('inputCity')
        var state = document.getElementById('inputState')

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
            // Redirect to index.html
            window.location = 'index.html';
            // Show alert
            alert('Your order is placed').requird();
        } else {
            // If any field is empty, show an alert
            alert('Please fill in all fields.');
        }

    });
});