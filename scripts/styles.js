'use strict';

$('.dropdown-header').click(() => {
  $('.children').slideToggle();
  $('.drop').toggleClass('up');
});

$('.option').click(function() {
  $('select').val($(this).index());
  $('.children').slideToggle()
  $('.dropdown-header span').text($(this).text());
  $('.drop').toggleClass('up');
});
