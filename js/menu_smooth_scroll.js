// ************ MENU SMOOTH SCROLLING ************

const navbarMenu = document.querySelector('.menu');
const navbarLinks = document.querySelectorAll('.menu-item a');
const logo = document.querySelector('.logo');
const readMoreBtn = document.querySelector('.read-more-btn');


// Add event listener to all navbarLinks
for(let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener('click', smoothScroll);
}

logo.addEventListener('click', smoothScroll);
readMoreBtn.addEventListener('click', smoothScroll);


function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  
  window.scrollTo({
    top: targetId === null ? 0 : (document.querySelector(targetId).offsetTop) - getStyle(navbar, 'height').replace(/\D/g,''),
    behavior: "smooth"
  });
}


// Returns the style value of an element
// https://gist.github.com/cms/369133
function getStyle(el, styleProp) {
  var value, defaultView = (el.ownerDocument || document).defaultView;
  // W3C standard way:
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation
    // (hypen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  } else if (el.currentStyle) { // IE
    // sanitize property name to camelCase
    styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
      return letter.toUpperCase();
    });
    value = el.currentStyle[styleProp];
    // convert other units to pixels on IE
    if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
      return (function(value) {
        var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft + "px";
        el.style.left = oldLeft;
        el.runtimeStyle.left = oldRsLeft;
        return value;
      })(value);
    }
    return value;
  }
}


const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
});