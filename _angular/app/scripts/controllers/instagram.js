'use strict';

/**
 * @ngdoc function
 * @name jrpzApp.controller:InstagramCtrl
 * @description
 * # InstagramCtrl
 * Controller of the jrpzApp
 */
angular.module('jrpzApp')
  .controller('InstagramCtrl', function ($scope, instagramFactory) {
    instagramFactory.getImages(function (data) {
      $scope.images = data;
      console.log(data);
    });
  });
