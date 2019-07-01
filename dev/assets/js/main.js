$(document).ready(function () {

  // Responsive bg

  let resizeHandler = function () {
    const width = window.innerWidth;
    const bg = document.querySelectorAll('.js-bg-selection');
    let url = '';

    for (let i = 0; i < bg.length; i++) {
      if (width < 769) {
        url = bg[i].getAttribute('data-mobile-bg');
      } else {
        url = bg[i].getAttribute('data-main-bg');
      }
      bg[i].style.backgroundImage = 'url("' + url + '")';
    }
  };

  window.onresize = function (event) {
    resizeHandler()
  };
  window.onload = function () {
    resizeHandler();
  }

  // Menu

  let $menu = $('.menu');
  let $body = $('html');

  function hideMenu() {
    $menu.removeClass('active');
    $body.removeClass('off');
  }

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      hideMenu();
    }
  })

  $('.header__toggle, .menu-toggle-mobile').on('click', function () {
    $menu.addClass('active');
    $body.addClass('off');
  })

  $('.menu__button').on('click', function () {
    hideMenu();
  })

});