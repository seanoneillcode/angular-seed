'use strict';

angular.module('myApp.conversation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/conversation', {
    templateUrl: 'conversation/conversation.html',
    controller: 'ConversationCtrl'
  });
}])

.controller('ConversationCtrl', [function() {

}]);
