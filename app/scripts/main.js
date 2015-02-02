/* global $: false */

(function () {
  'use strict';

  $(document).ready(function(){
    if ($('.home-page').length) {
      console.log($('.nav'));
      window.addEventListener('scroll', function (e) {
        $('.nav').toggle(window.scrollY > $('.header').outerHeight() - $('.nav').outerHeight());
      });
    } else {
      $('.nav').sticky();
    }
  });

})();
