(function () {
  'use strict'

  angular.module('common').
    directive('tweet',function () {
      return {
        restrict: 'A',
        templateUrl:'scripts/tweets/directives/tweetDirective.html' //TODO: 5. Create a directive that loads tweetDirective.html (use templateUrl)
      };
    });
})();
