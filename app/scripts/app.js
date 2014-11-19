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
          controller: 'TweetsOverviewController', //TODO: 1. Create a resolver fetching all tweets from the TwitterSearchService
          resolve: {
            tweets: function(TwitterSearchService){
              return TwitterSearchService.searchTweets('Ordina');
            }
          }
        })
        .when('/tweetDetail/:id',{
          templateUrl:'views/tweets/tweetDetail.html',
          controller:'TweetDetailController', //TODO: 2. Create a resolver fetching tweet details by id from the TwitterSearchService (use $route.current.params.id)
          resolve: {
            tweet: function(TwitterSearchService,$route){
              return TwitterSearchService.searchTweetById($route.current.params.id);
            }
          }
        })
        .when('/about', {
          templateUrl: 'views/about/about.html',
          controller: 'AboutController',
          resolve: {
            about: function(AboutService){
              return AboutService.fetchAbout();
            }
          }
        })
        .when('/contact', {
          templateUrl: 'views/contact/contact.html',
          controller: 'ContactController',
          resolve: {
            contact: function(ContactService){
              return ContactService.fetchContact();
            }
          }
        }).otherwise({
          redirectTo: '/'
        });
    });
})();
