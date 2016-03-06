angular.module('ionicApp')
  .controller('StatsCtrl', function($scope, Restangular) {
    Restangular.all('users').getList().then(function (users) {
      $scope.users = users;
    })
  });
