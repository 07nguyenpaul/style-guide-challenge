$(document).ready(function() {
  $('.accordion-tabs').children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();

  $('.accordion-tabs').on('click', 'li > a', function() {
    if(!$(this).hasClass('is-active')) {
      $('.accordion-tabs .is-open').removeClass('is-open').hide();
      $(this).next().toggleClass('is-open').toggle();
      $('.accordion-tabs').find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      $('.accordion-tabs .is-open').removeClass('is-open').hide();
      $(this).removeClass('is-active');
    }
  });
});
