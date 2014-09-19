'use strict';

angular.module('jrpzApp')
  .controller('ProjectsCtrl', function ($scope, projectFactory) {
    projectFactory.getProjects( function (data) {
      $scope.projects = data;
    });
  });