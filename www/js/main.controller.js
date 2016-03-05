angular.module('ionicApp')
  .controller('MainCtrl', function($scope, Restangular) {
    Restangular.one('users', 1).get().then(function(user) {
      $scope.user = user;
    });
  });
