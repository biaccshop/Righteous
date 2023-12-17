// Modal section
$(document).ready(function () {
    var modal = $(".modal");
    var ModalOpened = false;
  
    $(window).scroll(function () {
      var modalStarting = document.querySelector('#products-content');
      var rect = modalStarting.getBoundingClientRect();
      if (ModalOpened == false) {
        if (rect.top <= window.innerHeight && rect.bottom >= 0 && !ModalOpened) {
          modal.css("display", "block");
          ModalOpened = true;
        }
      }
    });
  
    modal.on("click", ".close", function () {
      modal.css("display", "none");
    });
  
    modal.on("click", "a", function () {
      modal.css("display", "none");
    });
  
    $(document).on("click", function (event) {
      if ($(event.target).is(modal)) {
        modal.css("display", "none");
      }
    });
  });