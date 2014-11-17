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
    .module('solutionApp', ['ngRoute','common','tweets','about','contact']).config(function ($routeProvider) { //TODO: 8. Inject ngRoute module
      $routeProvider
        .when('/', {
          templateUrl: 'views/tweets/tweetsOverview.html', //TODO: 9. When default route, load tweetsOverview.html and use TweetsOverviewController
          controller: 'TweetsOverviewController'
        })
        .when('/about', {
          templateUrl: 'views/about/about.html', //TODO: 10. When /about, load about.html and use AboutController
          controller: 'AboutController'
        })
        .when('/contact', {
          templateUrl: 'views/contact/contact.html', //TODO: 11. When /contact, load contact.html and use ContactController
          controller: 'ContactController'
        }).otherwise({
          redirectTo: '/' //TODO: 12. Otherwise redirect to default route
        });
    });
})();
