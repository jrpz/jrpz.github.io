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
    var instagramUrl = 'http://jrpz-server.herokuapp.com/instagram';

    // Public API here
    return {
      getImages: function (callback) {
        $http.get(instagramUrl)
          .success(function (response) {
            callback(response);
          })
          .error(function (err) {
            callback(err);
          });
      }
    };
  });
