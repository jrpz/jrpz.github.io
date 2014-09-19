'use strict';

describe('Service: twitterFactory', function () {

  // load the service's module
  beforeEach(module('jrpzApp'));

  // instantiate service
  var twitterFactory;
  beforeEach(inject(function (_twitterFactory_) {
    twitterFactory = _twitterFactory_;
  }));

  it('should do something', function () {
    expect(!!twitterFactory).toBe(true);
  });

});
