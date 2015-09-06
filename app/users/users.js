'use strict';

angular.module('myApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'UsersCtrl'
  });
}])

.controller('UsersCtrl', ['$scope', 'UsersService', '$location', 'LoginService', function($scope, UsersService, $location, LoginService) {
  $scope.users = UsersService.getUsers();
  $scope.loadConversation = function(user) {
    $location.path("conversation/" + user.id);
  };
  $scope.logout = function() {
    console.log("logout called");
    LoginService.logout().then($location.path("login"));
  };
}]);
