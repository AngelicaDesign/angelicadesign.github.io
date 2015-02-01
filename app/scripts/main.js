(function () {
  'use strict';
  var $ = document.querySelector.bind(document);
  window.addEventListener('scroll', function (e) {
    $('.nav').classList.toggle('hide', window.scrollY < $('.header').offsetHeight - $('.nav').offsetHeight);
  });
})();
