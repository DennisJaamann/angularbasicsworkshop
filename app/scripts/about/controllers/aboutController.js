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
    .controller('AboutController', function ($scope) {
        var title = 'About';
        var content = 'Content'
        $scope.about = {title: title, content: content};
    });
})();
