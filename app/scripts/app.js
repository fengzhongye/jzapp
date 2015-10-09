'use strict';

define(['angular', 'angular-animate', 'angular-aria', 'angular-cookies',
  'angular-leaflet-directive', 'angular-messages', 'angular-mocks', 'angular-resource', 
  'angular-route', 'angular-sanitize', 'angular-simple-logger', 'angular-touch', 'angular-cesium', 'jquery', 'bootstrap'], function(ng){

  var app = ng.module('myapp', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'leaflet-directive', 'angularCesium']);

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

  app.controller('MapController',  function ($scope,  $http, ObservableCollection) {
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




    $scope.newLayer = {};
    $scope.layers = [];
    $scope.billboards = new ObservableCollection();
    $scope.billboardsId = 0;
    $scope.billboards.add($scope.billboardsId++, {
      image : 'images/yeoman.png',
      color : 'blue',
      position : {
        latitude : 31,
        longitude : 34,
        altitude : 500
      }
    });
    $scope.newBillboard = { position : {}};
    $scope.maps = [{
      name : 'netanel'
    }];
    $scope.newMap = {};
    $scope.labels = new ObservableCollection();
    $scope.labelsId = 0;
    $scope.labels.add($scope.labelsId++,{
      text : 'Netanel',
      color : 'red',
      position : {
        latitude : 34,
        longitude : 31,
        altitude : 500
      }
    });
    $scope.newLabel = {};

    $scope.cars = [{
      position : {
        latitude : 31,
        longitude : 56
      }
    }];

  });

  return app;
});