'use strict';

angular.module('StaffApp')
    .controller('StaffListController', function ($scope, DepartmentsModel) {
        $scope.departments = DepartmentsModel.getDepartments();
        $scope.person1={};
        $scope.person2={};
        $scope.person1.email="matthewallingham@ekmsystems.co.uk" ;
        $scope.person2.email="davidsharpe@ekmsystems.co.uk" ;
    });
