'use strict';

describe('Controller: InstagramCtrl', function () {

  // load the controller's module
  beforeEach(module('jrpzApp'));

  var InstagramCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstagramCtrl = $controller('InstagramCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
