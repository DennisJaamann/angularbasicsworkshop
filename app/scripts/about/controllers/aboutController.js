(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name aboutModule.controllers:AboutController
   * @description
   * # AboutController
   * Controller of the about module
   */
  angular.module('about')
    .controller('AboutController', function ($scope,about) {
        $scope.about = about;
    });
})();
