'use strict';

describe('Controller: StaffListController', function () {
    var staffListCtrl
        , scope
        , $httpBackend;


      // load the controller's module
      beforeEach(module('restangular'));
      beforeEach(module('StaffApp.controllers'));
      beforeEach(module('StaffApp.services'));


      // Initialize the controller
      beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _$location_, DepartmentsModel) {
          $httpBackend = _$httpBackend_;
          scope = $rootScope.$new();
          staffListCtrl = $controller('StaffListController', {
            $scope: scope,
            DepartmentsModel: DepartmentsModel,
            $location: _$location_
          });
      }));

      it('should attach a list of departments to the scope', function () {
          $httpBackend.whenGET("/department").respond(200, [{},{},{},{}]);

          scope.$apply(function () {
              scope.init();
          })

          var departments=0;

          scope.departments.then(function(results){
              departments = results;
          });

          $httpBackend.flush();

          expect(departments.length).toBe(4);
      });

});
