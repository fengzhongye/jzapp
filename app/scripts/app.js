'use strict';

define(['angular', 'angular-animate', 'angular-aria', 'angular-cookies',
  'angular-leaflet-directive', 'angular-messages', 'angular-mocks', 'angular-resource', 
  'angular-route', 'angular-sanitize', 'angular-simple-logger', 'angular-touch', 'jquery', 'bootstrap', 'angular-esri-map'], function(ng){

  var app = ng.module('myapp', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'leaflet-directive', 'esri.map']);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.controller('MapController',  function ($scope,  $http) {
    angular.extend($scope, {
        center: {
            lat: 0,
            lng: 0,
            zoom: 2
        }
    });

    $scope.searchIP = function(ip) {
        var url = "http://freegeoip.net/json/" + ip;
        $http.get(url).success(function(res) {
            $scope.center = {
                lat: res.latitude,
                lng: res.longitude,
                zoom: 10
            }
            $scope.ip = res.ip;
        })
    };

    $scope.searchIP("111.13.101.208");

    
  });

  return app;
});