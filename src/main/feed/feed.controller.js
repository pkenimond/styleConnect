angular
.module('main.feed')
.controller('FeedController', ['feedService', FeedController]);

function FeedController(feedService) {
    var vm = this;

    vm.feed = [];

    init();

    function init() {
        console.log('FeedController');
        feedService.getFeed().then(function(data) {
            vm.feed = data.data;

            console.log(vm.feed);
        });
    }
}