(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name solutionApp
   * @description
   * # solutionApp
   *
   * Main module of the application.
   */
  angular
    .module('solutionApp', ['ngRoute','ngResource','common','tweets','about','contact']).config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/tweets/tweetsOverview.html',
          controller: 'TweetsOverviewController'
        })
        .when('/tweetDetail/:id',{
          templateUrl:'views/tweets/tweetDetail.html',
          controller:'TweetDetailController'
        })
        .when('/about', {
          templateUrl: 'views/about/about.html',
          controller: 'AboutController'
        })
        .when('/contact', {
          templateUrl: 'views/contact/contact.html',
          controller: 'ContactController'
        }).otherwise({
          redirectTo: '/'
        });
    });
})();
