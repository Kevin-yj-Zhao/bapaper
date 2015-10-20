var app = angular.module('app', [
	'ngRoute',
	'ngResource'
]);

window.app = app;

$(function () {
    document.body.innerHTML =
        '<main-nav></main-nav>' +
        '<div ng-view></div>';

    angular.bootstrap(document, ['app']);
});
