$(function () {
  $('#learn-more').on('click', function () {
    $('html,body').animate(
      {
        scrollTop: $('#about').offset().top,
      },
      'slow'
    );
  });
});
