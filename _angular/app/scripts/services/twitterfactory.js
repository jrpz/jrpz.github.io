'use strict';

/**
 * @ngdoc service
 * @name jrpzApp.twitterFactory
 * @description
 * # twitterFactory
 * Factory in the jrpzApp.
 */
angular.module('jrpzApp')
  .factory('twitterFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
