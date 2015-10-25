'use strict';

app.directive('mainNav', [
	'User',
	'$location',
	function(User, $location) {
		return {
			templateUrl: 'directives/nav/mainNav.html',
			link: function($scope, ele) {
				// $scope.user = {
				// 	Admin: true
				// };
				User.get(function(data) {
					$scope.user = data;
					if (data.Admin) {
						$location.path('/admin');
					}
				});

			}
		}
	}
])