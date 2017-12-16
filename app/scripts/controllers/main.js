'use strict';

/**
 * @ngdoc function
 * @name yoemanIdsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoemanIdsApp
 */
angular.module('yoemanIdsApp')
  .controller("MainCtrl", function($scope, $location, $cookies, $http, FormDataService) {
    this.patentCode = "US9623902";
    this.findPatentInfo3_2 = function(app_no, fl_date, f_name_inventor, art_unit, exam_name, at_doc_no) {
      $cookies.put('pt_no', this.patentCode);
      FormDataService.set(app_no, fl_date, f_name_inventor, art_unit, exam_name, at_doc_no);
      $location.path('/verify-uspto-form');
    }
  });
