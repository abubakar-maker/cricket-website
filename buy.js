document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('myForm').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form values
        var firstName = document.getElementById('first-name').value.trim();
        var lastName = document.getElementById('last-name').value.trim();
        var address = document.getElementById('address').value.trim();
        var postalCode = document.getElementById('postal-code').value.trim();
        var phone = document.getElementById('phone').value.trim();

        // Check if all fields are filled
        if (firstName !== '' && lastName !== '' && address !== '' && postalCode !== '' && phone !== '') {
            // Save user information in localStorage
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('address', address);
            localStorage.setItem('postalCode', postalCode);
            localStorage.setItem('phone', phone);

            // Redirect to index.html
            window.location = 'index.html';
            // Show alert
            alert('Your order is placed');
        } else {
            // If any field is empty, show an alert
            alert('Please fill in all fields.');
        }

    });
});