// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

// Scroll Reveal
ScrollReveal({
  reset: false,
  distance: '400px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.hero-content', { origin: 'left', distance: '0px', delay: 200 });
ScrollReveal().reveal('.hero-img', { origin: 'right', distance: '0px', delay: 200 });
ScrollReveal().reveal('.statistics', { origin: 'top', distance: '0px', delay: 600 });
ScrollReveal().reveal('.about-content', { origin: 'left', distance: '200px', delay: 200 });
ScrollReveal().reveal('.about-img', { origin: 'right', distance: '200px', delay: 200 });
ScrollReveal().reveal('.about2-content', { origin: 'left', distance: '200px', delay: 200 });
ScrollReveal().reveal('.about2-img', { origin: 'right', distance: '200px', delay: 200 });
ScrollReveal().reveal('.about3-content', { origin: 'left', distance: '200px', delay: 200 });
ScrollReveal().reveal('.about3-img', { origin: 'right', distance: '200px', delay: 200 });
ScrollReveal().reveal('.feedbacks-title', { origin: 'left', distance: '0px', delay: 200 });
ScrollReveal().reveal('.feedbacks-content', { origin: 'top', distance: '0px', delay: 600 });
ScrollReveal().reveal('.contact-title', { origin: 'left', distance: '0px', delay: 200 });

// Navbar anchor + hiding # in URL
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top + 4 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    }, 300);
  }
});