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
    .controller('TweetsOverviewController', function ($scope,$log, TwitterSearchService) {

      var searchTweetsSuccessHandler = function(result){
        $scope.tweets = result.statuses;
        $log.log('Number of tweets: ' + $scope.tweets.length);
      };

      TwitterSearchService.searchTweets('Ordina Belgium').then(searchTweetsSuccessHandler);
    });
})();
