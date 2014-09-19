'use strict';

/**
 * @ngdoc service
 * @name jrpzApp.projectFactory
 * @description
 * # projectFactory
 * Factory in the jrpzApp.
 */
angular.module('jrpzApp')
  .factory('projectFactory', function ($http) {
    // Service logic
    var projectsUrl = '/data/projects.json';

    // Public API here
    return {
      getProjects: function (callback) {
        $http.get(projectsUrl)
          .success(function (response) {
            callback(response);
          })
          .error(function (err) {
            console.log("Error: " + err);
            callback(err);
          });
      }
    };
  });