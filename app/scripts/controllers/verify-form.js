'use strict';

/**
 * @ngdoc function
 * @name yoemanIdsApp.controller:VerifyFormCtrl
 * @description
 * # VerifyFormCtrl
 * Controller of the yoemanIdsApp
 */
angular.module('yoemanIdsApp')
  .controller('VerifyFormCtrl', function($scope, $cookieStore, $cookies, $http, epoApi, FormDataService) {
    var vm = this;
    this.pt_no = $cookies.get('pt_no');
    $scope.$watch(function() {
      return FormDataService.get();
    }, function(newValue, oldValue) {
      if (newValue !== null) {
        vm.app_no = FormDataService.get().app_no;
        vm.fl_date = FormDataService.get().fl_date;
        vm.f_name_inventor = FormDataService.get().f_name_inventor;
        vm.art_unit = FormDataService.get().art_unit;
        vm.exam_name = FormDataService.get().exam_name;
        vm.at_doc_no = FormDataService.get().at_doc_no;
      }
    }, true);


    epoApi.getData('publication/epodoc/' + this.pt_no + '/biblio.js').then(function(response) {
      console.log(response.data);
      if (response.data !== null || response.data !== 'undefined') {

        vm.patentNo = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['bibliographic-data']['publication-reference']['document-id'][0]['doc-number']['$'];

        vm.issueDate = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['bibliographic-data']['publication-reference']['document-id'][0]['date']['$'];

        vm.applicant = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['bibliographic-data']['parties']['applicants']['applicant'][0]['applicant-name']['name']['$'];

        vm.inventor = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['bibliographic-data']['parties']['inventors']['inventor'][0]['inventor-name']['name']['$']

        vm.k_code = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['@kind'];

        vm.c_code = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['@country'];
        console.log("pt no: " + vm.patentNo);
        console.log("kind code : " + vm.k_code);
        console.log("inventors : " + vm.inventor);
        console.log("c_code : " + vm.c_code);
        console.log("applicants : " + vm.applicant);
      }
    });
  });
