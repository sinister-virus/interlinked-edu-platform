function submitForm(event) {
  event.preventDefault(); // Prevents the default form submission

  // Get form data
  const formData = {};
  const formElements = document.getElementById("studentForm").elements;

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.type !== "submit") {
      formData[element.name] = element.value;

      // Check for empty required fields
      if (element.hasAttribute("required") && element.value.trim() === "") {
        alert("Please fill in all required fields.");
        return; // Stop checking if any required field is empty
      }
    }
  }

  // Display submitted data
  alert("Form submitted!\n\n" + JSON.stringify(formData, null, 2));
}

// Example JavaScript for toggling a responsive menu
const navBar = document.querySelector('.nav-bar');
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
  navBar.classList.toggle('responsive');
});
