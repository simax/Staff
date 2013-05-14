'use strict';

angular.module('StaffApp', ['md5', 'ui-gravatar'])
  .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'views/partial1.html', controller: 'StaffListController'}).
            when('/edit/:id', {templateUrl: 'views/partial2.html', controller: 'EmployeeMaintenanceController'}).
            otherwise({redirectTo: '/'});
  }]);
