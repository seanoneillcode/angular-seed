'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope', '$location', 'UsersService', 'LoginService', function($scope, $location, UsersService, LoginService) {

  LoginService.getCurrentUser().then(function(user) {
    console.log("current user is ", user);
    if (user !== undefined) {
      $location.path("users");
    }
  });

  $scope.submitCredentials = function() {
    var users = UsersService.getUsers();
    var user = users.filter(function(user) {
      return user.name === $scope.user;
    })[0];
    if (user !== undefined) {
      if (user.password === $scope.password) {
        LoginService.loginAsUser(user)
        .then($location.path("users"));
      } else {
        // password is incorrect
      }
    } else {
      // user not found
    }
  };

  $scope.createCredentials = function() {
    var user = UsersService.createUser($scope.newuser, $scope.newpassword);
    LoginService.loginAsUser(user)
    .then($location.path("users"));
  };
}]);
