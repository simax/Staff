'use strict';

angular.module('StaffApp.controllers', []);
angular.module('StaffApp.directives', []);
angular.module('StaffApp.filters', []);
angular.module('StaffApp.services', []);
angular.module('StaffApp', ['StaffApp.controllers', 'StaffApp.directives', 'StaffApp.filters', 'StaffApp.services', 'restangular', 'ui.bootstrap'])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider.
            when('/', {templateUrl: 'views/home.html', controller: 'HomeController'}).
            when('/employees', {templateUrl: 'views/employeesList.html', controller: 'StaffListController'}).
            when('/about', {templateUrl: 'views/AboutApp.html', controller: 'AboutAppController'}).
            when('/contact', {templateUrl: 'views/Contact.html', controller: 'ContactController'}).
            when('/employees/add/:departmentName', {templateUrl: 'views/employeeDetail.html', controller: 'EmployeeAddController'}).
            when('/employees/:departmentId/edit/:empId',
            {
                templateUrl: 'views/employeeDetail.html',
                controller: 'EmployeeMaintenanceController',
                resolve: {
                    employee: function($route, DepartmentsModel) {
                        return DepartmentsModel.getEmployeeById($route.current.params.departmentId, $route.current.params.empId);
                    }
                }
            }).
            otherwise({redirectTo: '/'});

    }])
    .config(['RestangularProvider', function(RestangularProvider) {

        RestangularProvider.setBaseUrl('http://localhost:3000/api');
//        RestangularProvider.setBaseUrl('/api');
        RestangularProvider.setRestangularFields({
            id: "_id",
            route: "restangularRoute"
        });

        // Now let's configure the response extractor for each request
        RestangularProvider.setResponseExtractor(function(response, operation) {
            // This is a get for a list
            var newResponse;

            if (operation === "getList") {
                // Here we're returning an Array
                newResponse = response.payload;
            } else {
                // This is an element
                newResponse = response.payload[0];
            }
            return newResponse;
        });
    }]);