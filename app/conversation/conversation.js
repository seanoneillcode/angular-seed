'use strict';

angular.module('myApp.conversation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/conversation/:id', {
    templateUrl: 'conversation/conversation.html',
    controller: 'ConversationCtrl'
  });
}])

.controller('ConversationCtrl', ['$routeParams', '$scope', 'UsersService', function($routeParams, $scope, UsersService) {
  $scope.id = $routeParams.id;
  $scope.user = UsersService.getUser($scope.id);
  console.log("user ", $scope.user);
}]);
