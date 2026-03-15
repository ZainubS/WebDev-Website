document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      response.textContent = "Please fill out all fields.";
      response.style.color = "darkred";
      return;
    }

    console.log("Form submitted:", { name, email, message });
    response.textContent = "Thank you! Your message has been received.";
    response.style.color = "darkgreen";

    form.reset();
  });
});
