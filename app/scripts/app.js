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
    .module('solutionApp', ['common', 'tweets', 'about', 'contact']).config(function ($routeProvider) { //TODO: 8. Inject ngRoute module
      $routeProvider
        .when('/', {
          //TODO: 9. When default route, load tweetsOverview.html and use TweetsOverviewController
        })
        .when('/about', {
          //TODO: 10. When /about, load about.html and use AboutController
        })
        .when('/contact', {
          //TODO: 11. When /contact, load contact.html and use ContactController
        }).otherwise({
          //TODO: 12. Otherwise redirect to default route
        });
    });
})();
