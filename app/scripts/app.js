'use strict';

angular.module('StaffApp.controllers', []);
angular.module('StaffApp.directives', []);
angular.module('StaffApp.filters', []);
angular.module('StaffApp.services', []);
angular.module('StaffApp', ['StaffApp.controllers', 'StaffApp.directives', 'StaffApp.filters', 'StaffApp.services', 'restangular'])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider.
            when('/', {templateUrl: 'views/home.html', controller: 'HomeController'}).
            when('/employees', {templateUrl: 'views/employeesList.html', controller: 'StaffListController'}).
            when('/about', {templateUrl: 'views/AboutApp.html', controller: 'AboutAppController'}).
            when('/contact', {templateUrl: 'views/Contact.html', controller: 'ContactController'}).
            when('/employees/add/:departmentName', {templateUrl: 'views/employeeDetail.html', controller: 'EmployeeMaintenanceController'}).
            when('/employees/:departmentId/edit/:empId', {templateUrl: 'views/employeeDetail.html', controller: 'EmployeeMaintenanceController'}).
            otherwise({redirectTo: '/'});

    }])
    .config(['RestangularProvider', function(RestangularProvider) {

        RestangularProvider.setBaseUrl('http://localhost\\:8000/api');
        RestangularProvider.setRestangularFields({id: '_id'});

    }]);