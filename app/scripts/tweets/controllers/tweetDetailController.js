(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name tweetsModule.controllers:TweetDetailController
   * @description
   * # TweetDetailController
   * Controller of the tweets Module
   */
  angular.module('tweets')
    .controller('TweetDetailController', function ($scope,$log,$routeParams,TwitterSearchService) {
      var searchTweetByIdSuccessHandler = function(result){
        $scope.tweet = result;
        $log.log('Tweet ' + $scope.tweet);
      };

      TwitterSearchService.searchTweetById($routeParams.id).then(searchTweetByIdSuccessHandler);
    });
})();
