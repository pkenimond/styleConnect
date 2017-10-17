angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', routeConfig]);

function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'src/main/home/home.view.html',
            controller: HomeController
    });

    $urlRouterProvider.otherwise('/home');
}