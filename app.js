var app = angular.module ('mainApp', ['ngRoute']);

// Route config
app.config(routeConfig);
function routeConfig ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller  : 'mainController',
            title: 'index'
        })
        .when('/add', {
            templateUrl: 'views/birthdayInput.html',
            controller  : 'addController',
            title: 'Add'})
        .when('/display', {
            templateUrl: 'views/birthdayMonths.html',
            controller  : 'displayController',
            title: 'Display'})
        .otherwise({ redirectTo: '/' , pathMatch: 'full'});
}

// Controllers for views
app.controller('mainController', mainController);
function mainController($scope, $rootScope) {
    $scope.message = 'Welcome to the my Birthday App!';
    $rootScope.birthdayArr = [
        { name: 'Bob', date: '01-03-1987' },
        { name: 'Steven', date: '31-05-1996' },
        { name: 'Kale', date: '14-02-2001' }
    ];
}

app.controller('addController', addController);
function addController($scope, $rootScope) {
    $scope.message = 'Add more birthdays';
    $scope.datePattern = '/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/';
    $scope.birthday = {
        name: '',
        date: ''
    };
    $scope.onAddNewBirthday = function() {
        $rootScope.birthdayArr.push($scope.birthday);
        console.log('added');
    }
}

app.controller('displayController', function($scope,$rootScope,$filter) {
    $scope.message = 'Birthday dashboard';
    $scope.months = [{name:'January',count: 0}, {name: 'February', count: 0}, {name: 'March', count: 0}, {name: 'April', count: 0},
        {name: 'May', count: 0}, {name: 'June', count: 0}, {name:'July', count: 0}, {name: 'August', count: 0},
        {name: 'September', count: 0}, {name: 'October', count: 0}, {name: 'November', count: 0}, {name: 'December', count: 0}];
    // loop through birthdayArr to do counts and store in months
    angular.forEach($rootScope.birthdayArr, function(value) {
        var mon = value.date.substr(3,2);
        switch(mon) {
            case '01': $scope.months[0].count++;break;
            case '02': $scope.months[1].count++;break;
            case '03': $scope.months[2].count++;break;
            case '04': $scope.months[3].count++;break;
            case '05': $scope.months[4].count++;break;
            case '06': $scope.months[5].count++;break;
            case '07': $scope.months[6].count++;break;
            case '08': $scope.months[7].count++;break;
            case '09': $scope.months[8].count++;break;
            case '10': $scope.months[9].count++;break;
            case '11': $scope.months[10].count++;break;
            case '12': $scope.months[11].count++;break;
        }
    });
    $scope.displayArray = $scope.months; // Initial module with Chronological order
    $scope.setChronologicalOrder = function() {
        //set order to Chronological
        $scope.displayArray = $scope.months;
        console.log('Chronological order activated!');
    };
    $scope.setNumericalOrder = function() {
        // set order to Numerical
        $scope.displayArray = $filter('orderBy')($scope.months, 'count');
        console.log('Numerical order activated!');
    }
});

// //directive for the display
// app.directive('birthday', birthdayDirective);
// function birthdayDirective() {
//     return {
//         restrict: 'A',
//         replace: true,
//         scope: {
//             order: ''
//         },
//         controller: displayController,
//         template: "<h3>Hello</h3>"
//     };
// }