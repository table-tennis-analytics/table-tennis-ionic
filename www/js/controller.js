angular.module('ionicApp', ['ionic', 'restangular'])
.config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('http://table-tennis-api.herokuapp.com/v1');
    
    RestangularProvider.addResponseInterceptor(function (response) {
         return response.data;
    });
})
.controller('MainCtrl', function($scope, Restangular) {
    Restangular.one('users', 1).get().then(function(resp) {
    console.log('Success', resp);
    $scope.fp = resp.fp;
    $scope.sp = resp.sp;
    $scope.poname = resp.poname;
    $scope.ptname = resp.ptname;
    $scope.tablename = resp.tablename;
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
});
