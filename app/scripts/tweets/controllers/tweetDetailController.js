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
    .controller('TweetDetailController', function ($scope,$log) { //TODO: 3. Inject tweet & put on scope
        $log.log('Tweet ' + $scope.tweet);
    });
})();
