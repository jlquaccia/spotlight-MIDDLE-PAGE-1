(function() {
  var app = angular.module('spotlightMidPage1', ['angularScreenfull']);

  app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.currentDate = new Date();
    $scope.toggle = false;
  }]);
})();