// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicApp', ['ionic', 'restangular', 'ui.router'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }).config(function (RestangularProvider, $stateProvider, $urlRouterProvider) {
    RestangularProvider.setBaseUrl('http://table-tennis-api.herokuapp.com/v1');

    $stateProvider
      .state('main', {
        url: '',
        abstract: true,
        controller: 'MainCtrl',
        template: '<ui-view></ui-view>',
      })
      .state('main.home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
      })
      .state('main.play', {
        url: '/play',
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl',
      })
      .state('main.settings', {
        url: '/settings',
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
      })
      .state('main.stats', {
        url: '/stats',
        templateUrl: 'views/stats.html',
        controller: 'StatsCtrl',
      });

    $urlRouterProvider.otherwise(function ($injector) {
      $injector.get('$state').go('main.home');
    });
  });
