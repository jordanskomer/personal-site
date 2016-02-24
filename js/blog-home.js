'use strict';

angular.module('blog.home', ['ngRoute'])

    // Declared route
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/signin', {
            templateUrl: './blog-home.html',
            controller: 'HomeCtrl'
        });
    }])

    // Home controller
    .controller('HomeCtrl', [function() {

    }]);