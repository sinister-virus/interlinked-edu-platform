function login() {
  // Get the values from the input fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  // Check if either username, password, or role is empty
  if (!username.trim() || !password.trim() || !role.trim()) {
    alert('Please enter both username, password, and select a role.');
    return;
  }

  // Implement your actual login logic here based on roles
  switch (role) {
    case 'admin':
      if (username === 'admin' && password === 'admin') {
        // Redirect to admin home page
        window.location.href = 'admin_home.html';
      } else {
        alert('Invalid username or password for Admin.');
      }
      break;

    case 'student':
      if (username === 'student' && password === 'student') {
        // Redirect to student home page
        window.location.href = 'student_home.html';
      } else {
        alert('Invalid username or password for Student.');
      }
      break;

    case 'institute':
      if (username === 'institute' && password === 'institute') {
        // Redirect to institute home page
        window.location.href = 'institute_home.html';
      } else {
        alert('Invalid username or password for Institute.');
      }
      break;

    default:
      alert('Invalid role selected.');
  }
}
