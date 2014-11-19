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

     //TODO: 7. Create a new resource with url /doSearch?q=:searchTerm&count=10

      var twitterSearchByIdResource = $resource('/searchById?id=:id',{ id: '@id'}, {});

      //TODO: 8. Create a new function searchTweets(searchTerm)
      //TODO: 9. resource.get(searchTerm) and return a promise

      this.searchTweetById = function(id){
        $log.log('Fetching tweet with id ' + id);
        return twitterSearchByIdResource.get({id: id}).$promise;
      }
    });
})();
