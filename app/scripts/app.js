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
    .module('solutionApp', []) //TODO: 3. create a controller 'ApplicationController' on the module, pass $scope and $log
    .controller('ApplicationController', function ($scope, $log) {
      $log.log('Initializing application'); //TODO: 4. log 'initializing application'
      $scope.hello = 'Hello Ordina'; //TODO: 5. create a scope variable called 'hello'
    });
})();
