'use strict';

//I am actually shocked that there isn't a less convoluted way to style a freaking dropdown menu. It looks like there USED to be an easier way, like 8 years ago, but now we're stuck with doing nonsense like this to fake a styled dropdown. Omfg.

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
