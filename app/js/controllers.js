'use strict';

controllers.controller('StaffListController', function ($scope, departmentsModel) {
    $scope.departments =  departmentsModel.getDepartments();
});

