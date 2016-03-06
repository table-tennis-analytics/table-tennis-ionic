angular.module('ionicApp')
  .controller('MainCtrl', function($scope, Restangular, $window, $ionicModal) {
    var userId = $window.localStorage.user_id;

    $ionicModal.fromTemplateUrl('views/modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;

      if (userId) {
        Restangular.one('users', userId).get().then(function (user) {
          $scope.user = user;
        });
      } else $scope.openModal();
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

    $scope.setUser = function (_user) {
      Restangular.all('users').post({ user: _user }).then(function (user) {
        $window.localStorage.user_id = user.id;

        $scope.closeModal();
        $scope.user = user;
      });
    };
    // Execute action on hide modal
    // $scope.$on('modal.hidden', function() {

    // });
  });
