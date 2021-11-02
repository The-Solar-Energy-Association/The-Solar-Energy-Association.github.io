$(function () {
  $(window).on('scroll')(function () {
    if ($(window).scrollTop() > $(window).height() / 3) {
      $('#navbar').addClass('navbar-sticky');
    } else {
      $('#navbar').removeClass('navbar-sticky');
    }
  });
});
