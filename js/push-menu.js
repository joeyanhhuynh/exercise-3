// Needs latest version of jQuery to run
$(function() {
  $('body').removeClass('noscript');

  $('.toggle-btn, .close-btn').click(function() {
    toggleNav();
  });
});

function toggleNav() {
  if ($('.site-wrapper').attr('data-state') == 'slide-closed') {
    // Display Nav when closed
    $('.site-wrapper').attr('data-state', 'slide-open');
    $('.close-btn').removeClass('invis');
  } else {
    // Hide Nav when open
    $('.site-wrapper').attr('data-state', 'slide-closed');
    $('.close-btn').addClass('invis');
    //$('.toggle-btn').show();
  }
}