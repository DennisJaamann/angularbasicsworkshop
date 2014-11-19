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

      var twitterSearchResource = $resource('/doSearch?q=:searchTerm&count=10',{ searchTerm: '@searchTerm'}, {}); //TODO: 7. Create a new resource with url /doSearch?q=:searchTerm&count=10

      var twitterSearchByIdResource = $resource('/searchById?id=:id',{ id: '@id'}, {});

      this.searchTweets = function (searchTerm) { //TODO: 8. Create a new function searchTweets(searchTerm)
        $log.log('Fetching all tweets for ' + searchTerm);
        return twitterSearchResource.get({searchTerm: searchTerm}).$promise; // TODO: 9. resource.get(searchTerm) and return a promise
      };

      this.searchTweetById = function(id){
        $log.log('Fetching tweet with id ' + id);
        return twitterSearchByIdResource.get({id: id}).$promise;
      }
    });
})();
