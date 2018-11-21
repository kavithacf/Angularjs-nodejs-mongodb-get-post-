'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router'])

.config(['$urlRouterProvider',
 '$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
    });

   
    $stateProvider.state('form', {
        url: '/form',
        templateUrl: 'views/form.html',
        controller: 'loginCtrl'
    });
    
    // $stateProvider.state('about', {
    //     url: '/about',
    //     templateUrl: 'about.html'
    // });
    
   
}]);