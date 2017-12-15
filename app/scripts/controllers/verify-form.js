'use strict';

/**
 * @ngdoc function
 * @name yoemanIdsApp.controller:VerifyFormCtrl
 * @description
 * # VerifyFormCtrl
 * Controller of the yoemanIdsApp
 */
angular.module('yoemanIdsApp')
  .controller('VerifyFormCtrl', function($cookieStore, $http, epoApi) {
    var vm = this;
    epoApi.getData('publication/epodoc/' + 'US9623902' + '/biblio.js').then(function(response) {
      console.log(response);
    });
  });
