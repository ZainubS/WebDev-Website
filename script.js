document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      response.textContent = "Please fill out all fields.";
      response.style.color = "darkred";
      return;
    }

    // Email format check
    const emailPattern = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      response.textContent = "Please enter a valid email address.";
      response.style.color = "darkred";
      return;
    }

    // On success
    console.log("Form submitted:", { name, email, message });
    response.textContent = "Thank you! Your message has been received.";
    response.style.color = "darkgreen";

    form.reset();
  });
});
