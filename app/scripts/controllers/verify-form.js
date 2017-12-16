'use strict';

/**
 * @ngdoc function
 * @name yoemanIdsApp.controller:VerifyFormCtrl
 * @description
 * # VerifyFormCtrl
 * Controller of the yoemanIdsApp
 */
angular.module('yoemanIdsApp')
  .controller('VerifyFormCtrl', function($scope, $cookieStore, $cookies, $http, epoApi, FormDataService, $filter) {
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

        vm.applicants = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['bibliographic-data']['parties']['applicants']['applicant']; //[0]['applicant-name']['name']['$'];

        vm.inventors = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['bibliographic-data']['parties']['inventors']['inventor'];
        // eg: $filter('filter')(array, expression, comparator, anyPropertyKey)

        vm.inventors = $filter('filter')(vm.inventors, {
          "@data-format": "epodoc"
        });
        vm.inventorsNames = "";
        vm.inventors.forEach(function(inventor) {
          console.log(inventor['inventor-name']['name']['$']);
          //vm.inventorsNames += element['inventor-name']['name']['$'] + ", ";
        });

        //['inventor'][0]['inventor-name']['name']['$']

        vm.k_code = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['@kind'];

        vm.c_code = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['@country'];
        console.log("applicants");
        console.log(vm.applicants);
        console.log("Investors");
        console.log(vm.inventors);
      }
    });



    vm.download = function() {
      window.print();
    }

  });
