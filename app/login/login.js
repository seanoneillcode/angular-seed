'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope', '$location', 'UsersService', function($scope, $location, UsersService) {
  $scope.submitCredentials = function() {
    console.log("user ", $scope.user);
    console.log("password ", $scope.password);
    var users = UsersService.getUsers();
    console.log("users ", users);
    var user = users.filter(function(user) {
      return user.name === $scope.user;
    })[0];
    if (user !== undefined) {
      if (user.password === $scope.password) {
        $location.path("users");
      } else {
        // password is incorrect
      }
    } else {
      // user not found
    }
  };

}]);
