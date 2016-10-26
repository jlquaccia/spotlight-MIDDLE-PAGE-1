var Page = (function() {
  var config = {
    $bookBlock: $('#bb-bookblock'),
    $navNext: $('#bb-nav-next'),
    $navPrev: $('#bb-nav-prev'),
    $navFirst: $('#bb-nav-first'),
    $navLast: $('#bb-nav-last'),
    $navTwo: $('#bb-nav-2'),
    $nav3: $('#bb-nav-3'),
    $nav4: $('#bb-nav-4'),
    $nav5: $('#bb-nav-5'),
    $nav6: $('#bb-nav-6'),
    $nav7: $('#bb-nav-7')
  },
  init = function() {
    config.$bookBlock.bookblock({
      orientation : 'vertical',
      speed: 800,
      direction: 'ltr',
      shadowSides: 0.8,
      shadowFlip: 0.7
    });
    initEvents();
  },
  initEvents = function() {
    var $slides = config.$bookBlock.children();

    // add navigation events
    config.$navNext.on('click touchstart', function() {
      config.$bookBlock.bookblock('next');
      return false;
    });

    config.$navPrev.on('click touchstart', function() {
      config.$bookBlock.bookblock('prev');
      return false;
    });

    // thumbnails
    config.$navFirst.on('click touchstart', function() {
      config.$bookBlock.bookblock('first');
      return false;
    });

    config.$navLast.on('click touchstart', function() {
      config.$bookBlock.bookblock('last');
      return false;
    });

    // add swipe events
    $slides.on({
      'swipeLeft': function(event) {
        config.$bookBlock.bookblock('prev');
        return false;
      },
      'swipeRight': function(event) {
        config.$bookBlock.bookblock('next');
        return false;
      }
    });

    // add keyboard events
    $(document).keydown(function(e) {
      var keyCode = e.keyCode || e.which,
          arrow = {
            left: 37,
            up: 38,
            right: 39,
            down: 40
          };

      switch (keyCode) {
        case arrow.left:
          config.$bookBlock.bookblock('next');
          break;
        case arrow.right:
          config.$bookBlock.bookblock('prev');
          break;
      }
    });
  };

  return {init: init};
})();

Page.init();