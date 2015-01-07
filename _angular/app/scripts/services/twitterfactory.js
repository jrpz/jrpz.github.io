'use strict';

/**
 * @ngdoc service
 * @name jrpzApp.twitterFactory
 * @description
 * # twitterFactory
 * Factory in the jrpzApp.
 */
angular.module('jrpzApp')
  .factory('twitterFactory', function ($http) {
    // Service logic
    var twitterFeed = 'http://jrpz-server.herokuapp.com/twitter'
    // Public API here
    return {
      getTweets: function (callback) {
        $http.get(twitterFeed)
          .success(function (response) {
            callback(response);
          })
          .error(function (err) {
            console.log(err);
            callback(err);
          })
      }
    };
  });
