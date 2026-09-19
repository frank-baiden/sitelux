(function ($) {
  'use strict';

  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Collapse responsive navbar when a nav link is clicked
  $('.navbar-nav a.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Shrink navbar on scroll
  $(window).on('scroll load', function () {
    if ($(window).scrollTop() > 80) {
      $('#mainNav').addClass('navbar-shrink');
    } else {
      $('#mainNav').removeClass('navbar-shrink');
    }
  });

  // Newsletter signup (front-end only placeholder)
  $('#newsletterForm').on('submit', function (event) {
    event.preventDefault();
    var $form = $(this);
    var $input = $form.find('input[type="email"]');
    if ($input.val()) {
      $form.find('small').text('Thank you for joining MindSpace! Check your inbox to confirm.').addClass('text-success').removeClass('text-muted');
      $input.val('');
    }
  });

})(jQuery);
