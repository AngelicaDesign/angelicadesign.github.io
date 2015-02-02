/* global $: false */

(function () {
  'use strict';

  $(document).ready(function () {
    if ($('.home-page').length) {
      console.log($('.nav'));
      window.addEventListener('scroll', function () {
        $('.nav').toggle(window.scrollY > $('.header').outerHeight() - $('.nav').outerHeight());
        $('.to-top-button').toggle(window.scrollY > window.innerHeight);
      });
    } else {
      $('.nav').sticky();
    }

    $('a.to-top-button').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      return false;
    });

  });

})();
