angular
.module('app')
.config(['$routeProvider', routeConfig]);

function routeConfig($routeProvider) {
    $routeProvider
        .when('/feed', {
            templateUrl: 'src/main/feed/feed.view.html',
            controller: 'FeedController',
            controllerAs: 'vm'
        }).otherwise('/feed');
}