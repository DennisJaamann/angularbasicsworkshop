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
    .controller('TweetsOverviewController', function ($scope,$log) { //TODO: 4. Inject tweets & put tweet.statuses on scope
        $log.log('Number of tweets: ' + $scope.tweets.length);
    });
})();
