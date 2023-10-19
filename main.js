const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click', () => {
  primaryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute('data-overlay');

  const navWrapper = document.querySelector('.nav-wrapper'); // Select the nav-wrapper element

  if (navWrapper.classList.contains('data-overlay')) {
    navWrapper.classList.remove('data-overlay'); // Remove the data-overlay class
    navWrapper.style.backgroundImage = 'none'; // Remove the background image
  } else {
    navWrapper.classList.add('data-overlay'); // Add the data-overlay class
    navWrapper.style.backgroundImage = 'linear-gradient(rgb(0 0 0 / 0.6), rgb(0 0 0 / 0.6)'; // Set the background image
  }

  // Toggle the scroll-lock on the html and body elements
  const html = document.documentElement;
  const body = document.body;

  if (html.classList.contains('disable-scrolling')) {
    html.classList.remove('disable-scrolling');
    body.classList.remove('disable-scrolling');
  } else {
    html.classList.add('disable-scrolling');
    body.classList.add('disable-scrolling');
  }
})

document.addEventListener('DOMContentLoaded', function () {
  var navIcons = document.querySelectorAll('#nav-icon3');

  function toggleOpenClass() {
    this.classList.toggle('open');
  }

  navIcons.forEach(function (navIcon) {
    navIcon.addEventListener('click', toggleOpenClass);
  });
});

const year = document.getElementById('year');
year.innerHTML = new Date().getFullYear();