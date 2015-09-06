'use strict';

angular.module('myApp.conversationService', [])

.factory('ConversationService', function() {
  var factory = {};

  var conversations = [
    {"id":"0", "messages":[{"msg":"fisrt"}, {"msg":"second"}, {"msg":"third"}]},
    {"id":"1", "messages":[{"msg":"fisrt"}, {"msg":"second"}, {"msg":"third"}]},
    {"id":"2", "messages":[{"msg":"fisrt"}, {"msg":"second"}, {"msg":"third"}]},
    {"id":"3", "messages":[{"msg":"fisrt"}, {"msg":"second"}, {"msg":"third"}]}
  ];

  factory.getConversation = function(id) {
    return conversations.filter(function(conversation) {
      return conversation.id === id;
    })[0];
  }

  factory.getMessages = function(id) {
    return factory.getConversation(id);
  };

  factory.addMessage = function(id, message) {
    factory.getConversation(id).messages.push({"msg":message});
  };

  return factory;
});
