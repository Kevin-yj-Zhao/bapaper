app.controller('StudentCtrl',[
	'$scope',
	'Students',
	'User',
	function($scope, Students, User) {
		var user = User.get();
		Students.query(function(data) {
			$scope.students = data;
		});
	}
]);