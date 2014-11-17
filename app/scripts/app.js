(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name solutionApp
   * @description
   * # solutionApp
   *
   * Main module of the application.
   */
  angular
    .module('solutionApp', [])//TODO: 6. Inject the common module
    .controller('ApplicationController', function ($scope, $log) { //TODO: 5. Remove the controller
      $log.log('Initializing application');
      $scope.hello = 'Hello Ordina';
    });
})();
