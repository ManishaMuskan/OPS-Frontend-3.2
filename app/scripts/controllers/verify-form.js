'use strict';

/**
 * @ngdoc function
 * @name yoemanIdsApp.controller:VerifyFormCtrl
 * @description
 * # VerifyFormCtrl
 * Controller of the yoemanIdsApp
 */
angular.module('yoemanIdsApp')
  .controller('VerifyFormCtrl', function(myFactory) {
    var vm = this;
    // vm.patentCode = myFactory.get();
    // console.log(vm.patentCode);
    myFactory.getData().then(function(response) {
        if (response.data != null || response.data != 'undefined') {
          vm.inventors = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['bibliographic-data']['parties']['inventors']['inventor'];
          vm.k_code = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['@kind'];
          vm.c_code = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['@country'];
          alert("kind code : " + vm.k_code);
        } else {
          alert("Some Bad Request !! Try with valid data");
        }
      },
      function(response) {
        vm.s_code = response.statusCode;
        vm.description = response.statusText;
        alert("Error" + vm.s_code + " - " + vm.description);
      });
  });
