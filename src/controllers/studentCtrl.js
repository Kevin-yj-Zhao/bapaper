app.controller('StudentCtrl',[
	'$scope',
	'Students',
	function($scope, Students) {
		// $scope.allStudents = [{"Teacher": "庄伯金", "Title": "基于Android系统的视频监控管理平台", "ID": "2011210184", "Expert": "", "Name": "张妮竞男"}, {"Teacher": "庄伯金", "Title": "基于几何模型的图像深度信息计算", "ID": "2011210080", "Expert": "", "Name": "杨俊杰"}];
		$scope.allStudents = [];
		Students.query(function(data) {
			$scope.allStudents = data;
			if ($scope.allStudents.length > 0) {
				for (var i = 0; i < $scope.allStudents.length; i++) {
					if ($scope.allStudents[i].Status === -1) {
						$scope.allStudents[i].reviewStatus = "未提交";
					}
					else if ($scope.allStudents[i].Status === 0) {
						$scope.allStudents[i].reviewStatus = "未审核";
					}
					else if ($scope.allStudents[i].Status === 1) {
						$scope.allStudents[i].reviewStatus = "已通过";
					}
					else if ($scope.allStudents[i].Status === 2) {
						$scope.allStudents[i].reviewStatus = "未通过";
					}
					else {
						$scope.allStudents[i].reviewStatus = "";
					}
				}
			}
			$scope.students = $scope.allStudents;
		});

		$scope.allStudentsBtn = function() {
			var allStudents = $scope.allStudents;
			$scope.students = allStudents;
		}

		$scope.unReviewBtn = function() {
			var allStudents = $scope.allStudents;
			var unReviewStudents = [];
			if (allStudents.length > 0) {
				for (var i=0; i<allStudents.length; i++) {
					if (allStudents[i].Status <= 0) {
						unReviewStudents.push(allStudents[i]);
					}
				}
				if (unReviewStudents.length === 0) {
					$scope.students = [];
					alert('对不起，您的学生还没有被审核');
				} else {
					$scope.students = unReviewStudents;
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
					$scope.students = [];
					alert('老师，您还没有未通过的学生！~');
				} else {
					$scope.students = unPassedStudents;
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
					$scope.students = [];
					alert('对不起，您还没有学生通过审核！~');
				} else {
					$scope.students = passedStudents;
				}
			}
		}
	}
]);