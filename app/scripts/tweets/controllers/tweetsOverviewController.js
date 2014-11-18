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

      var searchTweetsSuccessHandler = function(result){ //TODO: 11. Create a succeshandler for tweets and put result on $scope.tweets
        $scope.tweets = result.statuses;
        $log.log('Number of tweets: ' + $scope.tweets.length);
      };

      TwitterSearchService.searchTweets('Ordina').then(searchTweetsSuccessHandler); // TODO: 10. Call searchTweetsMethods on TwitterSearchService and handle promise
    });
})();
