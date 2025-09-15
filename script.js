// Simple contact form interaction

document.getElementById("contactForm").addEventListener("submit", function(event) {

  event.preventDefault();

  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let message = document.getElementById("message").value;

  let response = document.getElementById("response");

  if(name && email && message) {

    response.textContent = "Thank you " + name + "! Your message has been sent.";

    response.style.color = "green";

  } else {

    response.textContent = "Please fill in all fields.";

    response.style.color = "red";

  }

});