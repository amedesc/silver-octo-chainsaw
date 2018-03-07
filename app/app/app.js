'use strict';

// Declare app level module which depends on views, and components
angular.module('losentisteApp', [
  'ngRoute',
  'losentisteApp.earthquakes-list',
  'losentisteApp.earthquake-form'
]).
config(['$locationProvider', '$routeProvider',"$httpProvider", function($locationProvider, $routeProvider,$httpProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/earthquakes-list'});
  $httpProvider.defaults.withCredentials = true;
}]);
