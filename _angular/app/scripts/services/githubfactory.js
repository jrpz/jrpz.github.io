'use strict';

/**
 * @ngdoc service
 * @name jrpzApp.gitHubFactory
 * @description
 * # gitHubFactory
 * Factory in the jrpzApp.
 */
angular.module('jrpzApp')
  .factory('gitHubFactory', function ($http) {
    // Service logic
    // ...
    var gitHubRepos = 'https://api.github.com/users/jrpz/repos';

    return {
      getGits: function (callback) {
        $http.get(gitHubRepos)
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
