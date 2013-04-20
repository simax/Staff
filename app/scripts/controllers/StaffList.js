'use strict';

angular.module('StaffApp')
    .controller('StaffListController', function ($scope, departmentsModel) {
        $scope.departments =  departmentsModel.getDepartments();
    });
