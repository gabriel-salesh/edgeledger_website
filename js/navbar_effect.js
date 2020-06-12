// Change navbar background color on scroll

const navbar = document.querySelector('.navbar-top');

let scrolled = false;
window.onscroll = function() {
  let top = window.scrollY;
  if (top > 150) {
    navbar.classList.add('navbar-scroll');
    if(!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
      this.setTimeout(function() {
        navbar.style.transform = 'translateY(0)';
      }, 200)
      scrolled = true;
    }
  } else {
    navbar.classList.remove('navbar-scroll');
    scrolled = false;
  }
}