'use strict';

var controllers = angular.module('staffApp.controllers', []);
var directives = angular.module('staffApp.directives', []);
var filters = angular.module('staffApp.filters', []);
var services = angular.module('staffApp.services', []);
var staffApp = angular.module('staffApp', ['staffApp.controllers', 'staffApp.filters', 'staffApp.services', 'staffApp.directives'])

staffApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'StaffListController'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
