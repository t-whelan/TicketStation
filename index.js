// Js code for a form element with the id "login-form" in your HTML

// Getting the form element by its id in the html document
const form = document.getElementById('login-form');

// Adds an event listener to the form's submit event button
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Gets the values from the form inputs
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform any necessary validation or processing with the username and password here

  // Redirects the user to the new page
  window.location.href = './home.html';
});


 
 
 
 
 
 
 


