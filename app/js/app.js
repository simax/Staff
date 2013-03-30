'use strict';

var controllers = angular.module('staffApp.controllers', []);
var directives = angular.module('staffApp.directives', []);
var filters = angular.module('staffApp.filters', []);
var services = angular.module('staffApp.services', ['md5', 'ui-gravatar']);
var staffApp = angular.module('staffApp', ['staffApp.controllers', 'staffApp.filters', 'staffApp.services', 'staffApp.directives']);

staffApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'StaffListController'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);

services.factory('departmentsModel', function() {
    var getDepartments = function() {
        return [
            {'name' : 'Development',
                'employees' : [
                    {'firstname' : 'Dan', 'lastname' : 'Ormisher', 'email' : 'danielormisher@ekmsystems.co.uk'},
                    {'firstname' : 'Nick', 'lastname' : 'Stansfield', 'email' : 'nickstansfield@ekmsystems.co.uk'},
                    {'firstname' : 'Simon', 'lastname' : 'Lomax', 'email' : 'simonlomax@ekmsystems.co.uk'}
                ]},
            {'name' : 'Design',
                'employees' : [
                    {'firstname' : 'David', 'lastname' : 'Sharpe', 'email' : 'davidsharpe@ekmsystems.co.uk'}]},
            {'name' : 'Customer Services',
                'employees' : [
                    {'firstname' : 'Matthew', 'lastname' : 'Allingham', 'email' : 'matthewallingham@ekmsystems.co.uk'}]},
            {'name' : 'Sales'}
        ];
    };

    return {
        getDepartments: getDepartments
    };
});
