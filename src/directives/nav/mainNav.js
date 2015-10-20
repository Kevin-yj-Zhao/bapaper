'use strict';

app.directive('mainNav', [
	function() {
		return {
			templateUrl: 'directives/nav/mainNav.html',
			link: function($scope, ele) {
				$scope.name = '刘宗明';
			}
		}
	}
])