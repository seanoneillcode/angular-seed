'use strict';

describe('myApp.users module', function() {

  beforeEach(module('myApp.users'));

  describe('users controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('UsersCtrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});
