app.controller('ReviewCtrl',[
	'$scope',
	function($scope) {
		$scope.reviewStudents = [{
			'studentId':'1234567',
			'name':'赵小鸡',
			'phone': '18627773184',
			'teacherName':'胡广煜',
			'submitTime': '2013.8.10',
			'reviewTime': '',
			'reviewStatus':'未通过'
		}]
	}
]);