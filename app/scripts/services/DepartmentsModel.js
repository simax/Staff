'use strict';

angular.module('StaffApp.services')
    .factory('DepartmentsModel', function(Restangular) {

        var departments = Restangular.all('departments')

        var getDepartments = function() {
            return departments.getList();
        };

        var getEmployeeById = function(departmentId, empId) {

            Restangular.one('departments',departmentId).one('employees', empId).get().then(function (emp){
                return emp;
            });


//            Restangular.one('departments',departmentId).get().then(function(dept) {
//                dept.one('employees', empId).get().then(function (emp){
//                    return emp;
//                });
//
//            });

//            empId = parseInt(empId);
//            var employee = undefined;
//            var departments = this.getDepartments();
//            _.each(departments, function(dep){
//                if(!employee){
//                    employee = _.find(dep.employees, function(emp) { return emp.id === empId });
//                }
//            });
//            return employee;
        };

        return {
            getEmployeeById: getEmployeeById,
            getDepartments: getDepartments
        };
    });
