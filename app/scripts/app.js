'use strict';

/**
 * @ngdoc overview
 * @name jrpzgithubioApp
 * @description
 * # jrpzgithubioApp
 *
 * Main module of the application.
 */
angular
  .module('jrpzApp', [
    'ngRoute'
  ])

  .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/projects.html'
        })
        
        .when('/twitter', {
          templateUrl: 'views/twitter.html',
          controller: 'TwitterCtrl'
        })

        .when('/github', {
          templateUrl: 'views/github.html',
          controller: 'GithubCtrl'
        })
        
        .when('/instagram', {
          templateUrl: 'views/instagram.html',
          controller: 'InstagramCtrl'
        })

        .when('/codepen', {
          templateUrl: 'views/codepen.html',
          controller: 'CodepenCtrl'
        })
    }]);
