'use strict';

/**
 * @ngdoc function
 * @name yoemanIdsApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the yoemanIdsApp
 */
angular.module('yoemanIdsApp')
  .controller('RegistrationCtrl', function ($location) {
    this.register = function(){
      $location.path("/login");
    };
  });
