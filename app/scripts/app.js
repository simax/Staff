'use strict';

angular.module('StaffApp', []);
angular.module('StaffApp.controllers', []);
angular.module('StaffApp.directives', []);
angular.module('StaffApp.filters', []);
angular.module('StaffApp.services', []);
angular.module('StaffApp', ['StaffApp.controllers', 'StaffApp.directives', 'StaffApp.filters', 'StaffApp.services' ])

  .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'views/partial1.html', controller: 'StaffListController'}).
            when('/edit/:id', {templateUrl: 'views/partial2.html', controller: 'EmployeeMaintenanceController'}).
            otherwise({redirectTo: '/'});
  }]);
