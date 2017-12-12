'use strict';

/**
 * @ngdoc function
 * @name yoemanIdsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the yoemanIdsApp
 */
angular.module('yoemanIdsApp')
  .controller('LoginCtrl', function ($location) {
    this.u_name = "mani";
    this.u_pwd = "mani123";
    this.login = function(){
      if(this.u_name == "mani" && this.u_pwd == "mani123"){
        $location.path("/claimPatent");
      } else {
      alert("Incorrect username and password combination !!");
      }
    };
  });
