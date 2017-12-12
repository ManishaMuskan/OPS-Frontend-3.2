'use strict';

/**
 * @ngdoc service
 * @name yoemanIdsApp.mydatafetcher
 * @description
 * # mydatafetcher
 * Service in the yoemanIdsApp.
 */
angular.module('yoemanIdsApp')
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://ops.epo.org/**'
    ]);
  })
  .factory('myFactory', function($http) {
    var patentCode;
    return {
      set: function(o) {
        this.patentCode = o;
      },
      // get: function() {
      //   return this.patentCode;
      // },
      getData: function() {
        return $http({
          url: 'http://ops.epo.org/3.1/rest-services/published-data/publication/epodoc/' + this.patentCode + '/biblio.js',
          method: 'jsonP'
        })
      }
    }
  });
