(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name tweetsModule.services.TwitterSearchService
   * @description
   * # TwitterSearchService
   * Service in the tweets module.
   */
  angular.module('tweets')
    .service('TwitterSearchService', function twitterSearchService($log,$resource) {
      // AngularJS will instantiate a singleton by calling "new" on this function

      var twitterSearchResource = $resource('/doSearch?q=:searchTerm&count=10',{ searchTerm: '@searchTerm'}, {});

      var twitterSearchByIdResource = $resource('/searchById?id=:id',{ id: '@id'}, {});

      this.searchTweets = function (searchTerm) {
        $log.log('Fetching all tweets for ' + searchTerm);
        return twitterSearchResource.get({searchTerm: searchTerm}).$promise;
      };

      this.searchTweetById = function(id){
        $log.log('Fetching tweet with id ' + id);
        return twitterSearchByIdResource.get({id: id}).$promise;
      }
    });
})();
