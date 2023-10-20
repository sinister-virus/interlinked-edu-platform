function submitForm(event) {
  event.preventDefault(); // Prevents the default form submission

  const formData = {};
  const formElements = document.getElementById("studentForm").elements;
  let isValid = true;

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

    if (element.type !== "submit") {
      formData[element.name] = element.value;

      // Check for empty required fields
      if (element.hasAttribute("required") && element.value.trim() === "") {
        isValid = false;
        alert("Please fill in all required fields.");
        break;
      }
    }
  }

  if (isValid) {
    alert("Form submitted!\n\n" + JSON.stringify(formData, null, 2));
  }
}

const navBar = document.querySelector('.nav-bar');
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
  navBar.classList.toggle('responsive');
});

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const label = section.querySelector('label');
      const input = section.querySelector('input, select');
      const labelWidth = label.clientWidth;
      input.style.width = `calc(50% - ${labelWidth / 2}px)`;
    });
  });
</script>