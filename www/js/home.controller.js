angular.module('ionicApp')
  .controller('HomeCtrl', function($scope, Restangular) {
    $scope.activeGame = {};

    fetchGames();

    $scope.selectChallengedUser = function (game) {
      var autocompleteController = angular.element(document.getElementsByClassName("ion-autocomplete")).controller('ionAutocomplete');

      $scope.activeGame = game;
      // autocompleteController.fetchSearchQuery("", true);
      autocompleteController.showModal();
    };

    $scope.claimGame = function (callback) {
      var game = $scope.activeGame;

      Restangular.one('games', game.id).patch({
        game: {
          challenger_id: $scope.user.id,
          challenged_id: callback.item.id,
        }
      }).then(function () {
        $scope.activeGame = {};

        fetchGames();
      });
    };

    $scope.getUsers = function (query) {
      return Restangular.all('users').getList({ query: query });
    };

    function fetchGames () {
      Restangular.all('games').getList({ scope: 'claimed' }).then(function (games) {
        $scope.claimedGames = games;
      });

      Restangular.all('games').getList({ scope: 'unclaimed' }).then(function (games) {
        $scope.unclaimedGames = games;
      });

    }
  });
