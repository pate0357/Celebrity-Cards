var Booya = angular.module('Booya')

.config(function ($routeProvider) {
    //this runs automatically when the main module is created
    //console.log('running config');
    $routeProvider
        .when('/', {
            title: "Celebrity List",
            templateUrl: 'templates/main.html',
            controller: 'MainCtrl'
        })
        .when('/details/:itemID', {
            title: "Celebrity",
            templateUrl: 'templates/details.html',
            controller: 'DetailsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});


Booya.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);