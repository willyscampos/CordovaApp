var app = angular.module('myapp', [
  'ngRoute'
]);


app.config(function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'pages/home.html' });
    $routeProvider.when('/home', { templateUrl: 'pages/home.html'});
    $routeProvider.when('/list', { templateUrl: 'list.html'});
    $routeProvider.when('/detail/:itemId', { templateUrl: 'detail.html'});
    $routeProvider.when('/settings', { templateUrl: 'settings.html' });
});

/* Controllers */
app.controller('MainCtrl', function ($rootScope, $scope) {
    $scope.title = "Start";
});

app.controller('HomeCtrl', function ($rootScope, $scope) {
    $scope.title = "Start";
});