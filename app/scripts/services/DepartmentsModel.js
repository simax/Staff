'use strict';

angular.module('StaffApp.services')
    .factory('DepartmentsModel', function($resource) {

//        window.departments = window.departments || [
//            {'name' : 'Development',
//                'employees' : [
//                    {'id': 1, 'firstname' : 'Dan', 'lastname' : 'Ormisher', 'email' : 'danielormisher@ekmsystems.co.uk'},
//                    {'id': 2, 'firstname' : 'Simon', 'lastname' : 'Lomax', 'email' : 'simax.99.99@gmail.com'},
//                    {'id': 3, 'firstname' : 'Nick', 'lastname' : 'Stansfield', 'email' : 'nickstansfield@ekmsystems.co.uk'}
//                ]},
//            {'name' : 'Design',
//                'employees' : [
//                    {'id': 4, 'firstname' : 'David', 'lastname' : 'Sharpe', 'email' : 'davidsharpe@ekmsystems.co.uk'}
//                ]},
//            {'name' : 'Customer Services',
//                'employees' : [
//                    {'id': 5, 'firstname' : 'Matthew', 'lastname' : 'Allingham', 'email' : 'matthewallingham@ekmsystems.co.uk'}
//                ]},
//            {'name' : 'Sales'}
//        ];

        var departments = $resource('localhost:1234/api/departments/:id, {id:@_id}');


        var getDepartments = function() {
            return departments.query();
        };

        var getEmployeeById = function(empId) {
            empId = parseInt(empId);
            var employee = undefined;
            var departments = this.getDepartments();
            _.each(departments, function(dep){
                if(!employee){
                    employee = _.find(dep.employees, function(emp) { return emp.id === empId });
                }
            });
            return employee;
        };

        return {
            getEmployeeById: getEmployeeById,
            getDepartments: getDepartments
        };
    });
