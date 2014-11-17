(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name common.controllers:NavigationController
   * @description
   * # NavigationController
   * Controller of the navigation Module
   */
  angular.module('common')
    .controller('NavigationController', function ($scope,$window) { // TODO: 8. Create new controller on common module, inject $scope and $window
      $scope.onItemClick = function(item){ //TODO: 9. Create a new onItemClickFunction(item) on the scope, $window.alert the item
        $window.alert(item + ' Has been clicked');
      };
    });
})();
