'use strict';

describe('Service: gitHubFactory', function () {

  // load the service's module
  beforeEach(module('jrpzApp'));

  // instantiate service
  var gitHubFactory;
  beforeEach(inject(function (_gitHubFactory_) {
    gitHubFactory = _gitHubFactory_;
  }));

  it('should do something', function () {
    expect(!!gitHubFactory).toBe(true);
  });

});
