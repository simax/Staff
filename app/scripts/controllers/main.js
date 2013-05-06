'use strict';

angular.module('staffApp.controllers', []);
angular.module('staffApp.directives', []);
angular.module('staffApp.filters', []);
angular.module('staffApp.services', ['md5', 'ui-gravatar', ]);
angular.module('staffApp', ['staffApp.controllers', 'staffApp.directives', 'staffApp.filters', 'staffApp.services' ])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'StaffListController'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);


