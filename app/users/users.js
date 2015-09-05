'use strict';

angular.module('myApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'UsersCtrl'
  });
}])

.controller('UsersCtrl', ['$scope', 'UsersService', '$location', function($scope, UsersService, $location) {
  $scope.users = UsersService.getUsers();
  console.log("users ", $scope.users);
  $scope.loadConversation = function(user) {
    console.log("load conversation with ", user.name);
    $location.path("conversation/" + user.id);
  };
}]);
