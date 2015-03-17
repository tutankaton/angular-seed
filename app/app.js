'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'evolutivoCrl',
  'evolutivoprepagoCrl',
  'evolutivoSrv',
  'cakeCtrl',
  'cakerecargasCtrl',
  'cakeSrv'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
	$(document).ready(function() {
	  $(document).foundation();
	});
}]);
