'use strict';

/**
 * @ngdoc function
 * @name jrpzApp.controller:CodepenCtrl
 * @description
 * # CodepenCtrl
 * Controller of the jrpzApp
 */
angular.module('jrpzApp')
  .controller('CodepenCtrl', function ($scope, codepenFactory) {
    codepenFactory.getPens(function (data) {
      $scope.pens = data;
    });
  });
