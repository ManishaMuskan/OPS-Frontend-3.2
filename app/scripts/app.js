'use strict';

angular
  .module('yoemanIdsApp', [
    'ngAnimate',
    'ngRoute',
    '720kb.datepicker',
    'oauth',
    'ngCookies'
  ])
  .config(function($routeProvider) {
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
        controllerAs: 'vForm'
      })
      .otherwise({
        redirectTo: '/404'
      });

  });
