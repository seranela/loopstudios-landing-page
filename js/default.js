const button = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-header');

function resizeUpdate() {
  if (document.body.offsetWidth >= 768) {
    nav.setAttribute('aria-expanded', false);
    nav.classList.remove('nav-header-show');
    button.classList.remove('nav-button-close');
  }
}

function toggleMenu() {
  if (nav.getAttribute('aria-expanded') === 'false') {
    nav.setAttribute('aria-expanded', true);
    nav.classList.add('nav-header-show');
    button.classList.add('nav-button-close');
    document.body.style.overflow = 'hidden';
  } else {
    nav.setAttribute('aria-expanded', false);
    nav.classList.remove('nav-header-show');
    button.classList.remove('nav-button-close');
    document.body.style.overflow = 'initial';
  }
}
window.addEventListener('resize', resizeUpdate, false);
button.addEventListener('click', toggleMenu, false);