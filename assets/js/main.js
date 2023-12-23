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
  duration: 750,
  delay: 200
});


ScrollReveal().reveal('.popup', { origin: 'top', distance: '0px', delay: 800 });
ScrollReveal().reveal('.hero', { origin: 'top', distance: '25px', delay: 200 });
ScrollReveal().reveal('.hero-slider', { origin: 'top', distance: '0px', delay: 300 });
ScrollReveal().reveal('.about-content', { origin: 'left', distance: '25px', delay: 200 });
ScrollReveal().reveal('.about-img', { origin: 'right', distance: '25px', delay: 200 });
ScrollReveal().reveal('.pricing-title', { origin: 'top', distance: '25px', delay: 200 });
ScrollReveal().reveal('.pricing-content', { origin: 'top', distance: '25px', delay: 600 });
ScrollReveal().reveal('.payments', { origin: 'bottom', distance: '25px', delay: 200 });
ScrollReveal().reveal('.feedbacks-title', { origin: 'top', distance: '25px', delay: 200 });
ScrollReveal().reveal('.feedbacks .slider', { origin: 'top', distance: '0px', delay: 600 });
ScrollReveal().reveal('.products', { origin: 'top', distance: '0px', delay: 200 });
ScrollReveal().reveal('.faq', { origin: 'top', distance: '0px', delay: 200 });
ScrollReveal().reveal('.tos', { origin: 'top', distance: '0px', delay: 200 });
ScrollReveal().reveal('.form', { origin: 'top', distance: '0px', delay: 200 });





// Navbar anchor + hiding # in URL
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 300);
  }
});



// Black Bar toggle
$(document).ready(function () {
  var menuOpen = false;

  $("#btn-blackbar, .nav-blackbar-item").click(function () {
    if (!menuOpen) {
      $("body").css("overflow", "hidden");
      $("#black-bar").slideDown();
      $("#btn-blackbar").addClass("active");
      $("#blackbarbutton-icon").removeClass("fa-bars").addClass("fa-xmark");
      menuOpen = true;
    } else {
      $("body").css("overflow", "auto");
      $("#black-bar").slideUp();
      $("#btn-blackbar").removeClass("active");
      $("#blackbarbutton-icon").removeClass("fa-xmark").addClass("fa-bars");
      menuOpen = false;
    }
  });
});