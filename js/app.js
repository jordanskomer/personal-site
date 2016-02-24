var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
   $routeProvider
       .when('/', {
           templateUrl: 'pages/home.html',
           controller: 'mainController'
       })
       .when('/about', {
           templateUrl: 'pages/about.html',
           controller: 'aboutController'
       });

}]);
app.controller('mainController', function($scope){
    $scope.class = "page-main";
});
app.controller('aboutController', function($scope){
    $scope.class = "page-about";
});