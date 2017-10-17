angular
.module('main', [])
.controller('MainController', [MainController]);

function MainController() {
    var vm = this;

    init();

    function init() {
        console.log('main init');
    }
}
