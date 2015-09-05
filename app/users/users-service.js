'use strict';

angular.module('myApp.usersService', [])

.factory('UsersService', function() {
  var factory = {};

  var users = [{"name":"joe", "password":"foo"}, {"name":"maire", "password":"bar"}, {"name":"jake", "password":"dog"}, {"name":"finn", "password":"human"}];

  factory.getUsers = function() {
      return users;
  }

  return factory;
});
