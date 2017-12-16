'use strict';
angular.module('yoemanIdsApp')
  //set config and trusted url
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://ops.epo.org/**'
    ]);
  })
  .service('epoApi', function($cookieStore, $http) {
    //var pt_no = $cookies.get('pt_no');
    var data_url = 'https://ops.epo.org/3.2/rest-services/published-data/';
    var cred = "TW9RbkZucm02NWM0ZUZpVzRBaFIwSkZ4a0YwalVwUHE6R3RRYUNPS3dWRWROSmx2QQ==";
    var authUrl = "https://ops.epo.org/3.2/auth/accesstoken";

    this.getData = function(endpoint) {
      $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
      var curTime = Date.now();
      var isAuthorized = false;
      var metaAccTokenArray = {};
      metaAccTokenArray = $cookieStore.get("metaAccTokenArray");
      if (metaAccTokenArray != undefined) {
        if (curTime < metaAccTokenArray.expired) {
          isAuthorized = true;
        }
      }
      if (isAuthorized) {
        return $http({
          url: data_url + endpoint,
          method: "GET",
          headers: {
            'Authorization': 'Bearer ' + metaAccTokenArray.acc_token
          }
        })
      } else {
        $http({
          url: authUrl,
          method: "POST",
          headers: {
            'Authorization': 'Basic ' + cred
          },
          data: $.param({
            grant_type: 'client_credentials'
          })
        }).then(function(response) {
          metaAccTokenArray = {
            'acc_token': response.data.access_token,
            'expired': Date.now() + 1080000
          };
          $cookieStore.put('metaAccTokenArray', metaAccTokenArray);
          isAuthorized = true;
          if (isAuthorized) {
            return $http({
              url: data_url + endpoint,
              method: "GET",
              headers: {
                'Authorization': 'Bearer ' + metaAccTokenArray.acc_token
              }
            })
          }
        });
      }
    }
  });
