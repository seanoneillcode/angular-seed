'use strict';

angular.module('myApp.loginService', [])

.factory('LoginService', function() {
  var factory = {};

  var currentUser = undefined;

  factory.loginAsUser = function(user) {
    return new Promise(function(resolve, reject) {
      currentUser = user;
      resolve();
    });
  };

  factory.logout = function() {
    return new Promise(function(resolve, reject) {
      currentUser = undefined;
      resolve();
    });
  };

  factory.getCurrentUser = function() {
    return new Promise(function(resolve, reject) {
      resolve(currentUser);
    });
  };

  return factory;
});
