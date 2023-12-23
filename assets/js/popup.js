// Modal section
$(document).ready(function () {
  var modal = $(".popup");
  function setModalClosed() {
    sessionStorage.setItem("modalClosed", "true");
  }

  var modalClosedFlag = sessionStorage.getItem("modalClosed");
  if (modalClosedFlag === null) {
    modal.css("display", "block");
  }
  modal.on("click", ".popup-close", function () {
    modal.css("display", "none");
    setModalClosed();
  });
  modal.on("click", ".btn-popup", function () {
    modal.css("display", "none");
    setModalClosed();
  });
  modal.on("click", ".btn-popup-2", function () {
    modal.css("display", "none");
    setModalClosed();
  });
  $(document).on("click", function (event) {
    if ($(event.target).is(modal)) {
      modal.css("display", "none");
      setModalClosed();
    }
  });
});