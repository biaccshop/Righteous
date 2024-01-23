// Scroll Reveal
ScrollReveal({
  reset: false,
  distance: '400px',
  duration: 750,
  delay: 200
});

ScrollReveal().reveal('.hero-content', { origin: 'left', distance: '100px', delay: 200 });
ScrollReveal().reveal('.hero-img', { origin: 'right', distance: '100px', delay: 200 });
ScrollReveal().reveal('.statistics', { origin: 'top', distance: '0px', delay: 600 });
ScrollReveal().reveal('.banner-div', { origin: 'top', distance: '0px', delay: 600 });
ScrollReveal().reveal('.feedbacks-title', { origin: 'top', distance: '25px', delay: 200 });
ScrollReveal().reveal('.feedbacks .slider', { origin: 'top', distance: '0px', delay: 600 });
ScrollReveal().reveal('.contact', { origin: 'top', distance: '0px', delay: 200 });
ScrollReveal().reveal('.products', { origin: 'top', distance: '0px', delay: 200 });
ScrollReveal().reveal('.faq', { origin: 'top', distance: '0px', delay: 200 });
ScrollReveal().reveal('.tos', { origin: 'top', distance: '0px', delay: 200 });



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