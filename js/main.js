// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

// ===================== SCROLL EFFECT ======================
// const section = document.querySelectorAll('section[id]');
// window.addEventListener('scroll' scrollActive)

// function scrollActive(){
//   const scrollY = window.pageXOffset

//   SpeechRecognitionResult.forEach(current =>){
//     const sectionHeight = current.offsetHeight
//    const sectionTop = current.offsetTop - 50;
//    sectionId =current.getAttribute('id')

//    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//      document.querySelector('.nav__menu a[href*=]' + sectionId + ']').classList.add('active')
//    }
//    else{
//     document.querySelector('.nav__menu a[href*=]' + sectionId + ']').classList.remove('active')
//    }
//   }
// }

