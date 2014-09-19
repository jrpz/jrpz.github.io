'use strict';

/**
 * @ngdoc service
 * @name jrpzApp.instagramFactory
 * @description
 * # instagramFactory
 * Factory in the jrpzApp.
 */
angular.module('jrpzApp')
  .factory('instagramFactory', function ($http) {
    var instagramUrlBase = '';

    // Public API here
    return {
      getInstagrams: function (callback) {
        $http.jsonp(instagramUrl)
          .success(function (response) {
            callback(response);
          })
          .error(function (err) {
            callback(err);
          });
      }
    };
  });
