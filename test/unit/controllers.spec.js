'use strict';

//测试类型描述，这里表示测试birthdayApp的controllers
describe('birthdayApp controllers', function() {
    // Test mainController
     describe('mainController', function(){
         beforeEach(module('birthdayApp'));
         var scope, mainCtrl, displayCtrl;
         beforeEach(inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();
                mainCtrl = $controller('mainController', {$scope: scope});
                displayCtrl = $controller('displayController', {$scope: scope});
         }));
         //Test begin here
         it('should create birthdayArr in mainController',
             inject(function() {
              //test value of scope.birthdayArr
              expect($rootScope.birthdayArr).toEqual([
                   { name: 'Bob', date: '01-03-1987' },
                    { name: 'Steven', date: '31-05-1996' },
                    { name: 'Kale', date: '14-02-2001' }
               ]);
          }));
     });

    // Test displayController
    describe('displayController', function(){
        beforeEach(module('birthdayApp'));
        var scope, displayCtrl;
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            displayCtrl = $controller('displayController', {$scope: scope});
        }));
        //Test begin here
        it('should create displayArray in displayController',
            inject(function() {
                //test value of scope.displayArray
                expect(scope.displayArray).toEqual([
                    {name:'January',count: 0}, {name: 'February', count: 1}, {name: 'March', count: 1}, {name: 'April', count: 0},
                    {name: 'May', count: 1}, {name: 'June', count: 0}, {name:'July', count: 0}, {name: 'August', count: 0},
                    {name: 'September', count: 0}, {name: 'October', count: 0}, {name: 'November', count: 0}, {name: 'December', count: 0}
                ]);
         }));
        //Test button-functions in displayController
        it('should set displayArray to Chronological order in displayController',
            inject(function() {
                scope.setChronologicalOrder();
                expect(scope.displayArray).toEqual([
                    {name:'January',count: 0}, {name: 'February', count: 1}, {name: 'March', count: 1}, {name: 'April', count: 0},
                    {name: 'May', count: 1}, {name: 'June', count: 0}, {name:'July', count: 0}, {name: 'August', count: 0},
                    {name: 'September', count: 0}, {name: 'October', count: 0}, {name: 'November', count: 0}, {name: 'December', count: 0}
                ]);
         }));
        it('Should sort months array by key of count in displayController', inject(function(){
            inject(function () {
                scope.setNumericalOrder();
                expect(scope.months).toEqual([{name:'July', count: 0},{name:'January',count: 0}, {name: 'November', count: 0}, {name: 'April', count: 0},
                    {name: 'October', count: 0}, {name: 'June', count: 0}, {name: 'September', count: 0}, {name: 'August', count: 0},
                    {name: 'December', count: 0}, {name: 'February', count: 0}, {name: 'May', count: 0},   {name: 'March', count: 0}
                    ]);
            })
        }));
    });
});