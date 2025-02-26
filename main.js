
// MOBILE NAVIGATION -----------------------------------------------------------------

const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");

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

// VIDEO FUNCTIONALITY  -----------------------------------------------------------------

function open_popup(container){
  var simply_con= document.getElementById(container);
  simply_con.classList.add("active");
}

function close_popup(container){
  var simply_con= document.getElementById(container);
  simply_con.classList.remove("active");
 var video = document.querySelector("." + container + " video");
  video.pause();
  video.currentTime = 0;
}

// FORM FUNCTIONALITY -----------------------------------------------------------------

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


// ANIMATION -----------------------------------------------------------------

ScrollReveal().reveal('.hero p, button, social-links, .info h1, .info p, .technologies li',{
  delay: 75,
  duration: 1500,
  opacity: 0,
  distance: "50%",
  origin: "top",
  reset: true
});



ScrollReveal().reveal('.profile-image , .left-side',{
  delay: 125,
  duration: 1500,
  opacity: 0,
  distance: "50%",
  origin: "left",
  reset: true
});

ScrollReveal().reveal('.right-side',{
  delay: 125,
  duration: 1500,
  opacity: 0,
distance: "10%",
  origin: "right",
  reset: true
});

ScrollReveal().reveal('.project',{
    delay: 125,
    duration: 1500,
    opacity: 0,
    distance: "40%",
    origin: "bottom",
    reset: true
  });








