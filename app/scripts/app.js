'use strict';

angular.module('StaffApp', []);
angular.module('StaffApp.controllers', []);
angular.module('StaffApp.directives', []);
angular.module('StaffApp.filters', []);
angular.module('StaffApp.services', ['ngResource']);
angular.module('StaffApp', ['StaffApp.controllers', 'StaffApp.directives', 'StaffApp.filters', 'StaffApp.services' ])

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
   .run(function($rootScope, $location){

        $rootScope.getClass = function(path) {
            var cur_path = $location.path().substr(0, path.length);
            if (cur_path == path) {
                if($location.path().substr(0).length > 1 && path.length == 1 )
                    return "";
                else
                    return "active";
            } else {
                return "";
            }
        }

    });
