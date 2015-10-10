'use strict';

require.config({
  paths:{
    'esri':'http://localhost/arcgis_js_api/jsapi/esri/',
    'dojo':'http://localhost/arcgis_js_api/jsapi/dojo/',
    'dijit':'http://localhost/arcgis_js_api/jsapi/dijit/',
    'dojox':'http://localhost/arcgis_js_api/jsapi/dojox/',
    'dgrid':'http://localhost/arcgis_js_api/jsapi/dgrid/',
    'xstyle':'http://localhost/arcgis_js_api/jsapi/xstyle/',
    'angular':'../bower_components/angular/angular',
    'angular-animate':'../bower_components/angular-animate/angular-animate',
    'angular-aria':'../bower_components/angular-aria/angular-aria',
    'angular-cookies':'../bower_components/angular-cookies/angular-cookies',
    'angular-leaflet-directive':'../bower_components/angular-leaflet-directive/dist/angular-leaflet-directive',
    'angular-messages':'../bower_components/angular-messages/angular-messages',
    'angular-mocks':'../bower_components/angular-mocks/angular-mocks',
    'angular-resource':'../bower_components/angular-resource/angular-resource',
    'angular-route':'../bower_components/angular-route/angular-route',
    'angular-sanitize':'../bower_components/angular-sanitize/angular-sanitize',
    'angular-simple-logger':'../bower_components/angular-simple-logger/dist/angular-simple-logger',
    'angular-touch':'../bower_components/angular-touch/angular-touch',
    'jquery':'../bower_components/jquery/dist/jquery',
    'bootstrap':'../bower_components/bootstrap/dist/js/bootstrap',
    'leaflet':'../bower_components/leaflet/dist/leaflet',
    'angular-esri-map':'../bower_components/angular-esri-map/dist/angular-esri-map',
    'domReady':'../bower_components/domReady/domReady'
  },
  shim:{
    'angular':{
      exports:'angular'
    },
    'angular-animate': {
      deps: ['angular'],
      exports: 'angular-animate'
    },
    'angular-aria': {
      deps: ['angular'],
      exports: 'angular-aria'
    },
    'angular-cookies': {
      deps: ['angular'],
      exports: 'angular-cookies'
    },
    'angular-leaflet-directive': {
      deps: ['angular'],
      exports: 'angular-leaflet-directive'
    },
    'angular-messages': {
      deps: ['angular'],
      exports: 'angular-messages'
    },
    'angular-mocks': {
      deps: ['angular'],
      exports: 'angular-mocks'
    },
    'angular-resource': {
      deps: ['angular'],
      exports: 'angular-resource'
    },
    'angular-route': {
      deps: ['angular'],
      exports: 'angular-route'
    },
    'angular-sanitize': {
      deps: ['angular'],
      exports: 'angular-sanitize'
    },
    'angular-simple-logger': {
      deps: ['angular'],
      exports: 'angular-simple-logger'
    },
    'angular-touch': {
      deps: ['angular'],
      exports: 'angular-touch'
    },
    'angular-esri-map': {
      deps: ['angular'],
      exports: 'angular-esri-map'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    'leaflet':{
      exports:'leaflet'
    },
    'jquery': {
      exports: 'jquery'
    }
  }
});

require(['angular', 'leaflet', './controllers/header', './controllers/about', './controllers/main', 'domReady!'], function(ng, L){
  window.L = L;
  ng.bootstrap(document, ['myapp']);
});