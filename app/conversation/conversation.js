'use strict';

angular.module('myApp.conversation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/conversation/:id', {
    templateUrl: 'conversation/conversation.html',
    controller: 'ConversationCtrl'
  });
}])

.controller('ConversationCtrl', ['$routeParams', '$scope', 'UsersService', 'ConversationService', function($routeParams, $scope, UsersService, ConversationService) {
  $scope.id = $routeParams.id;
  $scope.user = UsersService.getUser($scope.id);
  $scope.messages = ConversationService.getConversation($scope.id).messages;
  $scope.addMessage = function() {
    ConversationService.addMessage($scope.user.id, $scope.newmessage);
  };
}]);
