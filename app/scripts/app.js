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
    .module('solutionApp', ['ngRoute','common','tweets','about','contact']).config(function ($routeProvider) { //TODO: 5. Inject ngResource
      $routeProvider
        .when('/', {
          templateUrl: 'views/tweets/tweetsOverview.html',
          controller: 'TweetsOverviewController'
        })
        .when('/tweetDetail/:id',{
          //TODO: 6. When /tweetdetail/:id, load tweetdetail.html and use TweetDetailController
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
