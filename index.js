// Js code for a form element with the id "login-form" in your HTML

// Get the button element by its id
const submit = document.getElementById("submitLogIn");

// Adds an event listener to the form's submit event
submit.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Gets the values from the form inputs
  //input is declared for password and email
  let input = document.getElementById("input");

// Perform any necessary validation or processing with the username and password here
  const forEmailAndPassword = input.value.trim();
  if(forEmailAndPassword ===''){
    alert('please enter valid information');
  }else{window.location.href = 'index.html';}// Redirects the user to the new page

  // const email = input.value.trim();
  // const UserPassword = input.value.trim();
  // if(email ==='' || UserPassword ===''){
  //   alert('Insert valid details please');
  // }
});

 
 
 
 
 
 
 


