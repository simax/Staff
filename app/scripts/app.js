'use strict';

angular.module('StaffApp', [])
  .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'views/partial1.html', controller: 'StaffListController'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
