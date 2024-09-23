const mybutton = document.getElementById("goTopBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//

const mobileNavbar = document.getElementById('mobile-navbar');
const hideBar = document.getElementById('bar-hide');
const hideBarMobile = document.getElementById('bar-hide-mobile');

hideBar.addEventListener('click', function () {
  mobileNavbar.classList.remove('mobile-hidden');
  mobileNavbar.classList.add('mobile-show');
})

hideBarMobile.addEventListener('click', function () {
  mobileNavbar.classList.remove('mobile-show');
  mobileNavbar.classList.add('mobile-hidden');
})

