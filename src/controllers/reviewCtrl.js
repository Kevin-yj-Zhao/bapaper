app.controller('ReviewCtrl',[
	'$scope',
	'Reviews',
	function($scope, Reviews) {
		$scope.allStudents = [];
		
		Reviews.query(function(data) {
			$scope.allStudents = data;
			$scope.reviewStudents = $scope.allStudents;
		});


		$scope.allStudentsBtn = function() {
			var allStudents = $scope.allStudents;
			$scope.reviewStudents = allStudents;
		}

		$scope.unReviewBtn = function() {
			var allStudents = $scope.allStudents;
			var unReviewStudents = [];
			if (allStudents.length > 0) {
				for (var i=0; i<allStudents.length; i++) {
					if (allStudents[i].Status === 0) {
						unReviewStudents.push(allStudents[i]);
					}
				}
				if (unReviewStudents.length === 0) {
					$scope.reviewStudents = [];
					alert('对不起，您还没有学生需要被审核');
				} else {
					$scope.reviewStudents = unReviewStudents;
				}
			}
		}

		$scope.unPassedBtn = function() {
			var allStudents = $scope.allStudents;
			var unPassedStudents = [];
			if (allStudents.length > 0) {
				for (var i=0; i<allStudents.length; i++) {
					if (allStudents[i].Status === 2) {
						unPassedStudents.push(allStudents[i]);
					}
				}
				if (unPassedStudents.length === 0) {
					$scope.reviewStudents = [];
					alert('老师，您没有未通过审核的学生！~');
				} else {
					$scope.reviewStudents = unPassedStudents;
				}
			}
		}

		$scope.passedBtn = function() {
			var allStudents = $scope.allStudents;
			var passedStudents = [];
			if (allStudents.length > 0) {
				for (var i=0; i<allStudents.length; i++) {
					if (allStudents[i].Status === 1) {
						passedStudents.push(allStudents[i]);
					}
				}
				if (passedStudents.length === 0) {
					$scope.reviewStudents = [];
					alert('对不起，您还没有学生通过审核！~');
				} else {
					$scope.reviewStudents = passedStudents;
				}
			}
		}

	}
]);