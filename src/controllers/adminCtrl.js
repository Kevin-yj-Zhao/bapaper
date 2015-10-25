app.controller('AdminCtrl',[
	'$scope',
	'$http',
	function($scope, $http) {
		$scope.type = 'upload';


		$scope.changeUpload = function() {
			$scope.type = 'upload';
		}

		$scope.changeAssign = function() {
			$scope.type = 'assign';
			// if ( !$scope.teacherList) {
			// 	$http.get('/assign/teachers', function(data) {
			// 		$scope.teacherList = data;
			// 	});
			// }
			$scope.teacherList = [{
				id: '123',
				name:'刘宗明'
			},{
				id: '234',
				name: '赵小鸡'
			}];
		}

		$scope.changeDeadline = function() {
			$scope.type = 'deadline';
		}

		$scope.changeBlind = function() {
			$scope.type = 'blind';
		}
	}
]);