'use strict';

/**
 * @ngdoc overview
 * @name yoemanIdsApp
 * @description
 * # yoemanIdsApp
 *
 * Main module of the application.
 */
angular
  .module('yoemanIdsApp', [
    'ngAnimate',
    'ngRoute',
    '720kb.datepicker',
    'oauth'
  ])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/getStarted.html',
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'registration'
      })
      .when('/claimPatent', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/404', {
        templateUrl: '404.html',
      })
      .when('/verify-uspto-form', {
        templateUrl: 'views/verify-form.html',
        controller: 'VerifyFormCtrl',
        controllerAs: 'verifyForm'
      })
      .otherwise({
        redirectTo: '/404'
      });

});
//   .factory('myService', ['$location',
//   function($location) {
//     return {
//       l_out: function() {
//           $location.path("/");
//       }
//     };
//   }])
// .factory("UserService", function($http) {
//   var users = ["Peter", "Daniel", "Nina"];
//   var userdata = "hello";
//     $http({
//       url: 'http://ops.epo.org/3.1/rest-services/published-data/publication/epodoc/' + 'US9623902' + '/biblio.js',
//       type: 'GET',
//       dataType: "jsonP",
//       success: function(data) {
//
//           userdata = data['ops:world-patent-data']['exchange-documents']['exchange-document']['bibliographic-data']['parties']['inventors']['inventor'];
//
//         // userdata = data['ops:world-patent-data']['exchange-documents']['exchange-document']['bibliographic-data']['parties']['inventors']['inventor'];
//       },
//       error: function(XMLHttpRequest, textStatus, errorThrown) {
//         return textStatus;
//       }
//     });
//   return {
//     all: function() {
//       return users;
//     },
//     first: function() {
//       return users[0];
//     },
//     alldata: function() {
//       return userdata;
//     }
//   };
// });
