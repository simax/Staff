'use strict';

angular.module('StaffApp', []);
angular.module('StaffApp.controllers', []);
angular.module('StaffApp.directives', []);
angular.module('StaffApp.filters', []);
angular.module('StaffApp.services', []);
angular.module('StaffApp', ['StaffApp.controllers', 'StaffApp.directives', 'StaffApp.filters', 'StaffApp.services' ])

  .config(['$routeProvider', function($rootScope, $routeProvider) {

//        $rootScope.MenuItems = [{ name : "Home", route: ""}, {name : "About", route: "About"}, {name: "Contact", route: "Contact"}];
//        $rootScope.SetSelected = function(item){
//            $rootScope.selectedIndex = item;
//        }


        $routeProvider.
            when('/', {templateUrl: 'views/employeesList.html', controller: 'StaffListController'}).
            when('/about', {templateUrl: 'views/AboutApp.html', controller: 'AboutAppController'}).
            when('/employee/edit/:empId', {templateUrl: 'views/employeeDetail.html', controller: 'EmployeeMaintenanceController'}).
            otherwise({redirectTo: '/'});
  }]);
