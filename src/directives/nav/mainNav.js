'use strict';

app.directive('mainNav', [
	'User',
	function(User) {
		return {
			templateUrl: 'directives/nav/mainNav.html',
			link: function($scope, ele) {
				$scope.user = User.get();
			}
		}
	}
])