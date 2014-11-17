(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name tweetsModule.controllers:TweetsOverviewController
   * @description
   * # TweetsOverviewController
   * Controller of the tweets module
   */
  angular.module('tweets')
    .controller('TweetsOverviewController', function ($scope) {
      $scope.tweets = ['Tweet1','Tweet2','Tweet3','Tweet4'];
    });
})();
