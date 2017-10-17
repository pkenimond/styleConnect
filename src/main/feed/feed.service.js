angular
.module('main.feed')
.factory('feedService', ['$http', feedService]);

function feedService($http) {
    var service = {
        getFeed: getFeed
    };


    function getFeed() {
        console.log('getFeed');
        return $http.get('http://localhost:8002/sampledata/feeds.json');
    }

    return service;
}
