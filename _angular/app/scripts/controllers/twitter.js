'use strict';

/**
 * @ngdoc function
 * @name jrpzApp.controller:TwitterCtrl
 * @description
 * # TwitterCtrl
 * Controller of the jrpzApp
 */
angular.module('jrpzApp')
  .controller('TwitterCtrl', function ($scope, twitterFactory) {
    twitterFactory.getTweets(function (data) {
      $scope.tweets = data;
    });
  });
