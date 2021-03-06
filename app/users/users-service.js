'use strict';

angular.module('myApp.usersService', [])

.factory('UsersService', function() {
  var factory = {};

  var nextId = 4;

  var users = [
    {"name":"joe", "password":"foo", "id":"0"},
    {"name":"maire", "password":"bar", "id":"1"},
    {"name":"jake", "password":"dog", "id":"2"},
    {"name":"finn", "password":"human", "id":"3"}
  ];

  factory.getUsers = function() {
      return users;
  }

  factory.createUser = function(name, password) {
    var newUser = {"name":name, "password":password, "id":(""+nextId)};
    nextId++;
    users.push(newUser);
    return newUser;
  };

  factory.getUser = function(id) {
    var user = users.filter(function(user) {
      return user.id === id;
    })[0];
    console.log("user ", user);
    return user;
  };

  return factory;
});
