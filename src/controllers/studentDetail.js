app.controller('StudentDetailCtrl',[
	'$scope',
	'$http',
	'$routeParams',
	function($scope, $http, $routeParams) {
		var url = '/assign/student/' + $routeParams.studentId;
		$http.get(url)
			.success(function(data) {
				$scope.formData = data;
			});


		$scope.submit = function(data) {
			$http({
				method: 'POST',
				url: url,
				data: $.param(data),
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
				}
			});
		}
	}
]);