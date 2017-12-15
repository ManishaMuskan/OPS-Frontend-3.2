'use strict';

/**
 * @ngdoc function
 * @name yoemanIdsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoemanIdsApp
 */
angular.module('yoemanIdsApp')
  .controller("MainCtrl", function($scope, $location, $cookies, $http) {
    // $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    var vm = this;
    vm.patentCode = "US9623902";
    vm.findPatentInfo3_2 = function() {
      $location.path('/verify-uspto-form');
    }
  });
