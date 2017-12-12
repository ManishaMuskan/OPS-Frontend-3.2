'use strict';

/**
 * @ngdoc function
 * @name yoemanIdsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoemanIdsApp
 */
angular.module('yoemanIdsApp')
  .controller("MainCtrl", function($scope, $location, myFactory) {
    var vm = this;
    vm.patentCode = "US9623902";
    vm.findPatentInfo = function(patentCode) {
      myFactory.set(patentCode);
      $location.path('/verify-uspto-form');
    }
  });
