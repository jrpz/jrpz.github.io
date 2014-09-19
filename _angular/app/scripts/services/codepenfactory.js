'use strict';

/**
 * @ngdoc service
 * @name jrpzApp.codepenfactory
 * @description
 * # codepenfactory
 * Factory in the jrpzApp.
 */
angular.module('jrpzApp')
  .factory('codepenFactory', function ($http) {
    // Service logic
    // ...
    //var codePenRSS = 'http://codepen.io/jrpz/public/feed';
    var codePenRSS = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=http://codepen.io/jrpz/public/feed';
    
    return {
      getPens: function( callback ) {
        $http.jsonp(codePenRSS)
          .success(function (response) {
            callback(response.responseData.feed.entries);
          })
          .error(function (err) {
            console.log(err);
            callback(err);
          });
      }
    }

  });
