const form = document.getElementById('form');

const password = document.getElementById('pass');

const confirmPassword = document.getElementById('conf-pass');

const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (event) {

    errorMessage.textContent = '';

    
    if (password.value !== confirmPassword.value) {
      event.preventDefault(); 
      errorMessage.textContent = 'Passwords do not match'; 
      confirmPassword.style.borderColor = 'red';
    }
  });