'use strict';

/**
 * @ngdoc function
 * @name jrpzApp.controller:GithubCtrl
 * @description
 * # GithubCtrl
 * Controller of the jrpzApp
 */
angular.module('jrpzApp')
  .controller('GithubCtrl', function ($scope, gitHubFactory) {
    gitHubFactory.getGits(function (data) {
      $scope.gits = data;
    });
  });
