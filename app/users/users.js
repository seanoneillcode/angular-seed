'use strict';

angular.module('myApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'UsersCtrl'
  });
}])

.controller('UsersCtrl', ['$scope', 'UsersService', function($scope, UsersService) {
  $scope.users = UsersService.getUsers();
  console.log("users ", $scope.users);
}]);
