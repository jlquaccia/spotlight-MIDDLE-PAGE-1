(function() {
  var app = angular.module('spotlightMidPage1', ['angularScreenfull']);

  app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.currentDate = new Date();
    $scope.toggle = false;
    $scope.activePage = 1;
    $scope.goTo = function(page) {
      var $bookBlock = $('#bb-bookblock');

      $bookBlock.bookblock('jump', page);
    };

    $scope.nextActive = function() {
      if ($scope.activePage === 8) return;

      $scope.activePage++;
    };

    $scope.prevActive = function() {
      if ($scope.activePage === 1) return;

      $scope.activePage--;
    };

    $scope.infoToggle = function() {
      $('.footerBlurb').fadeToggle();
    };
  }]);
})();