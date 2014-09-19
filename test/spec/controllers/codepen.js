'use strict';

describe('Controller: CodepenCtrl', function () {

  // load the controller's module
  beforeEach(module('jrpzApp'));

  var CodepenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CodepenCtrl = $controller('CodepenCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
