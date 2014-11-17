(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name contactModule.controllers:ContactController
   * @description
   * # ContactController
   * Controller of the contact module
   */
  angular.module('contact')
    .controller('ContactController', function ($scope) {
      var title = 'Contact';
      var contacts = ['jan.dewilde@ordina.be', 'dennis.jaamann@ordina.be', 'http://www.ordina.be'];

      $scope.contact = {title: title, contacts: contacts};
    });
})();
