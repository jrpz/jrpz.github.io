'use strict';

describe('Service: codepenfactory', function () {

  // load the service's module
  beforeEach(module('jrpzApp'));

  // instantiate service
  var codepenfactory;
  beforeEach(inject(function (_codepenfactory_) {
    codepenfactory = _codepenfactory_;
  }));

  it('should do something', function () {
    expect(!!codepenfactory).toBe(true);
  });

});
