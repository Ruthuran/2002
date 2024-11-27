
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#form');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const Address = document.querySelector('#Address');
    const contactnumber = document.querySelector('#contactnumber');
  
    
    if (form) {
      form.addEventListener('submit', (e) => {
        if (!ValidateInput()) {
          e.preventDefault(); 
        }
      });
    } else {
      console.error('Form element not found!');
    }
  
    function ValidateInput() {
      const usernameVal = username.value.trim();
      const emailVal = email.value.trim();
      const passwordVal = password.value.trim();
      const AddressVal = Address.value.trim();
      const contactnumberVal = contactnumber.value.trim();
      let success = true;
  
      // Username validation
      if (usernameVal === '') {
        success = false;
        setError(username, 'Username is required');
      } else {
        setSuccess(username);
      }
  
      // Email validation
      if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
      } else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email');
      } else {
        setSuccess(email);
      }
  
      // Password validation
      if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required');
      } else if (!validatePassword(passwordVal)) {
        success = false;
        setError(password, 'Password must be at least 8 characters long, include at least one lowercase letter, one uppercase letter, one number, and one special character');
      } else {
        setSuccess(password);
      }
  
      // Address validation
      if (AddressVal === '') {
        success = false;
        setError(Address, 'Address is required');
      } else {
        setSuccess(Address);
      }
  
      // Contact number validation
      if (contactnumberVal === '') {
        success = false;
        setError(contactnumber, 'Contact number is required');
      } else if (!validateContactNumber(contactnumberVal)) {
        success = false;
        setError(contactnumber, 'contact number to be exactly 10 digits');
      } else {
        setSuccess(contactnumber);
      }
  
      return success;
    }
  
    function setError(element, message) {
      const inputGroup = element.parentElement;
      const errorElement = inputGroup.querySelector('.error-message');
  
      errorElement.innerText = message;
      inputGroup.classList.add('error');
      inputGroup.classList.remove('success');
    }
  
    function setSuccess(element) {
      const inputGroup = element.parentElement;
      const errorElement = inputGroup.querySelector('.error-message');
  
      errorElement.innerText = '';
      inputGroup.classList.add('success');
      inputGroup.classList.remove('error');
    }
  
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    };
  
    const validatePassword = (password) => {
      return String(password)
        .match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/);
    };
  
    const validateContactNumber = (phoneNumber) => {
      return String(phoneNumber)
        .match(/^\d{10}$/); 
    };
  });
  