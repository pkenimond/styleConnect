angular.module('stylistApp.services', [])


.factory('BackendService', ['$http', function ($http) {

  var svc = {};

  svc.getFeeds = function(){
    return $http.get('sampledata/feeds.json');
  }

  svc.getProducts = function(){
    return $http.get('sampledata/products.json');
  }

  return svc;
}])