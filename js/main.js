(function() {
  var app = angular.module('spotlightMidPage1', []);

  app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.currentDate = new Date();
    $scope.toggle = false;
  }]);
})();