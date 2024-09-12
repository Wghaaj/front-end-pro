document.getElementById('button').addEventListener('click', () => {
    const nameField = document.getElementById('name');
    const messageField = document.getElementById('message');
    const telField = document.getElementById('tel');
    const emailField = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const messageError = document.getElementById('messageError');
    const telError = document.getElementById('telError');
    const emailError = document.getElementById('emailError');
  
    nameError.style.display = 'none';
    messageError.style.display = 'none';
    telError.style.display = 'none';
    emailError.style.display = 'none';
  
    let valid = true;
  
    if (nameField.value.trim() === '') {
      nameError.textContent = 'Name is required.';
      nameError.style.display = 'block';
      valid = false;
    }
  
    if (messageField.value.trim().length < 5) {
      messageError.textContent = 'Message must be at least 5 characters long.';
      messageError.style.display = 'block';
      valid = false;
    }
  
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(telField.value.trim())) {
      telError.textContent = 'Phone number must start with +380 and contain 9 digits.';
      telError.style.display = 'block';
      valid = false;
    }
  
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailRegex.test(emailField.value.trim())) {
      emailError.textContent = 'Invalid email address.';
      emailError.style.display = 'block';
      valid = false;
    }

    if (valid) {
      const data = {
        name: nameField.value.trim(),
        message: messageField.value.trim(),
        phone: telField.value.trim(),
        email: emailField.value.trim()
      };
  
      console.log('Data entered:', data);
      alert('Message sent successfully!');
      document.getElementById('contactForm').reset();
    }
  });
  