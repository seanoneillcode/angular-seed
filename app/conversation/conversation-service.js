'use strict';

angular.module('myApp.conversationService', [])

.factory('ConversationService', function() {
  var factory = {};

  var conversations = [
    {"id":"0", "messages":["yolo"]},
    {"id":"1", "messages":["foo sdfsd fs df sdf "]},
    {"id":"2", "messages":["yol sdf sdf sdf  o"]},
    {"id":"3", "messages":["yolssos, sdf sdf"]},
  ];

  factory.getConversation = function(id) {
    var conversation = conversations.filter(function(conversation) {
      return conversation.id === id;
    })[0];
    console.log("conversation ", conversation);
    return conversation;
  };

  return factory;
});
