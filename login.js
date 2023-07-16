// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.getElementById('login-form');
  
    // Handle form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Perform form validation
      var usernameInput = document.getElementById('username');
      var passwordInput = document.getElementById('Password');
     
  
      // Validate inputs (can add additional validation as per  requirements)
      if (usernameInput.value.trim() === '') {
        alert('Please enter a username.');
        return;
      }
  
      if (passwordInput.value.trim() === '') {
        alert('Please enter a password.');
        return;
      }
  
      // If form is valid, perform login logic ()
      
      console.log('Username:', usernameInput.value);
      console.log('Password:', passwordInput.value);
  
      // Optional code, to  reset the form after successful submission
      form.reset();
    });
  });
