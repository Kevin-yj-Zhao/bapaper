app.controller('ReviewCtrl',[
	'$scope',
	'Reviews',
	function($scope, Reviews) {
		$scope.reviewStudents = Reviews.query();
	}
]);