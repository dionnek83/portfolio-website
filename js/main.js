const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

allEventListners();

function allEventListners() {
  navToggler.addEventListener("click", togglerClick);
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML =
        "  <h3>Success!</h3> <p>Your message has been sent </p> ";
      status.classList.add("success");
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "<h3>Error!</h3> <p>Your message was not sent</p>";
      status.classList.add("error");
    });
}
form.addEventListener("submit", handleSubmit);
AOS.init();
