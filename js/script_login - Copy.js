function login() {
  // Get the values from the input fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if username is empty
  if (!username.trim()) {
    alert('Please enter the username.');
    return;
  }
  
  // Check if password is empty
  if (!password.trim()) {
    alert('Please enter the password.');
    return;
  }



  // Check if either username or password is empty
  if (!username.trim() || !password.trim()) {
    alert('Please enter both username and password.');
    return;
  }

  // Implement your actual login logic here
  // For now, we'll just show an alert
  alert('Login successful!');
}
