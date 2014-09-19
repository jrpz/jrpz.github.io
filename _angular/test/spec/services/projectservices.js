'use strict';

describe('Service: projectServices', function () {

  // load the service's module
  beforeEach(module('jrpzApp'));

  // instantiate service
  var projectServices;
  beforeEach(inject(function (_projectServices_) {
    projectServices = _projectServices_;
  }));

  it('should do something', function () {
    expect(!!projectServices).toBe(true);
  });

});
