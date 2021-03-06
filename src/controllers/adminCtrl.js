app.controller('AdminCtrl',[
	'$scope',
	'$http',
	function($scope, $http) {
		var csrfmiddlewaretoken = document.getElementsByName('csrfmiddlewaretoken')[0].value;
			
		$scope.csrftoken = csrfmiddlewaretoken;

		$scope.teacherList = [];
		$scope.studentList = [];

		$scope.type = 'students';
		$scope.filter = 'all';
		$http.get('/assign/studentlist/all')
				.success(function(data) {
					$scope.studentList = data;
				})

		function addCsrf (formData) {

		}
		//上传处；
		// $scope.formData_uploadS = {};
		// $scope.formData_uploadT = {};
		$scope.formData_assign = {};
		$scope.formData_deadline = {};
		$scope.formData_blind = {}

		$scope.changeUpload = function() {
			$scope.type = 'upload';
			$scope.csrftoken = csrfmiddlewaretoken;
		}

		$scope.changeAssign = function() {
			$scope.type = 'assign';
			// if ( !$scope.teacherList) {
			// 	$http.get('/assign/teachers', function(data) {
			// 		$scope.teacherList = data;
			// 	});
			// }
			$http.get('/assign/teachers')
				.success(function(data) {
					$scope.teacherList = data;
				})
		}

		$scope.changeDeadline = function() {
			$scope.type = 'deadline';
			$http.get('assign/deadline')
				.success(function(data) {
					$scope.formData_deadline = data;
				})
		}

		$scope.changeBlind = function() {
			$scope.type = 'blind';
		}

		$scope.changeDefense = function() {
			$scope.type = 'defense';
		}

		$scope.changeManageData = function() {
			$scope.type = 'manageData';
		}

		$scope.changeStudents = function() {
			$scope.type = 'students';
			$scope.filter = 'all';
			$http.get('/assign/studentlist/all')
				.success(function(data) {
					$scope.studentList = data;
				});
			
		}

		$scope.changeSubed = function() {
			$scope.type = 'students';
			$scope.filter = 'subed';
			$http.get('/assign/studentlist/subed')
				.success(function(data) {
					$scope.studentList = data;
				});
			
		}

		$scope.changeUnsubed = function() {
			$scope.type = 'students';
			$scope.filter = 'unsubed';
			$http.get('/assign/studentlist/unsubed')
				.success(function(data) {
					$scope.studentList = data;
				});
			
		}

		$scope.changePass = function() {
			$scope.type = 'students';
			$scope.filter = 'pass';
			$http.get('/assign/studentlist/pass')
				.success(function(data) {
					$scope.studentList = data;
				});
			
		}

		$scope.changeNotpass = function() {
			$scope.type = 'students';
			$scope.filter = 'notpass';
			$http.get('/assign/studentlist/notpass')
				.success(function(data) {
					$scope.studentList = data;
				});
			
		}

		$scope.submitTeacherList = function() {
			var teacherIDList = [];
			var len = $scope.teacherList.length;
			for (var i=0; i<len; i++) {
				if ($scope.teacherList[i].isExpert === true) {
					teacherIDList.push($scope.teacherList[i].TeacherID);
				}
			}
			var data = {
				csrfmiddlewaretoken: csrfmiddlewaretoken,
				teacherIDList: teacherIDList
			}
			$http({
				method: 'POST',
				url: 'assign/set_experts',
				data: $.param(data),
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(data) {
				if (data) {
					//是否需要重新刷新页面，理论上时需要重新刷新页面的
					alert('提交成功！~');
				}
			}).error(function() {
				alert('对不起，没有提交成功！~');
			});
		}


		// $scope.submitUpload = function(data) {
		// 	data.csrfmiddlewaretoken = csrfmiddlewaretoken;
		// 	$http({
		// 		method: 'POST',
		// 		url: 'assign/upload',
		// 		data: $.param(data),
		// 		headers: {
  //                   'Content-Type': 'multipart/form-data'
		// 		}
		// 	}).success(function(data) {
		// 		if (data) {
		// 			alert('提交成功！~');
		// 		}
		// 	}).error(function() {
		// 		alert('对不起，没有提交成功！~');
		// 	});
		// }

		$scope.createTasks = function() {
			data = {
				csrfmiddlewaretoken: csrfmiddlewaretoken
			}
			document.getElementById("buttonCreate").disabled = true;
			document.getElementById("creating").style.visibility="visible";
			$http({
				method: 'POST',
				url: 'assign/createtasks',
				data: $.param(data),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(data) {
				document.getElementById("buttonCreate").disabled = false;
				document.getElementById("creating").style.visibility="hidden";
				if (data) {
					alert('已完成！');
				}
			}).error(function() {
				document.getElementById("buttonCreate").disabled = false;
				document.getElementById("creating").style.visibility="hidden";
				alert('对不起，失败！');
			});
		}

		$scope.submitDeadline = function(data) {
			data.csrfmiddlewaretoken = csrfmiddlewaretoken;
			$http({
				method: 'POST',
				url: 'assign/deadline',
				data: $.param(data),
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(data) {
				if (data) {
					alert('提交成功！~');
				}
			}).error(function() {
				alert('对不起，没有提交成功！~');
			});
		}

		$scope.submitBlindMidterm = function(data) {
			data.csrfmiddlewaretoken = csrfmiddlewaretoken;
			data.check = null;
			data.defense = null;
			$http({
				method: 'POST',
				url: 'assign/blind',
				data: $.param(data),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(data) {
				if (data) {
					alert('提交成功！');
				}
			}).error(function() {
				alert('对不起，没有提交成功！~');
			});
		}

		$scope.submitBlindCheck = function(data) {
			data.csrfmiddlewaretoken = csrfmiddlewaretoken;
			data.midterm = null;
			data.defense = null;
			$http({
				method: 'POST',
				url: 'assign/blind',
				data: $.param(data),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(data) {
				if (data) {
					alert('提交成功！');
				}
			}).error(function() {
				alert('对不起，没有提交成功！~');
			});
		}

		$scope.submitBlindDefense = function(data) {
			data.csrfmiddlewaretoken = csrfmiddlewaretoken;
			data.midterm = null;
			data.check = null;
			$http({
				method: 'POST',
				url: 'assign/blind',
				data: $.param(data),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(data) {
				if (data) {
					alert('提交成功！');
				}
			}).error(function() {
				alert('对不起，没有提交成功！~');
			});
		}

		$scope.assignExpert = function() {
			var data = {csrfmiddlewaretoken: csrfmiddlewaretoken};
			document.getElementById("buttonExpert").disabled = true;
			document.getElementById("buttonDefense").disabled = true;
			document.getElementById("waiting").style.visibility="visible";
			$http({
				method: 'POST',
				url: 'assign/assign',
				data: $.param(data),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(data) {
				if (data) {
					document.getElementById("buttonExpert").disabled = false;
					document.getElementById("buttonDefense").disabled = false;
					document.getElementById("waiting").style.visibility="hidden";
					alert('专家分组成功！');
				}
			}).error(function() {
				document.getElementById("buttonExpert").disabled = false;
				document.getElementById("buttonDefense").disabled = false;
				document.getElementById("waiting").style.visibility="hidden";
				alert('对不起，没有分组成功！~');
			});
		}

		$scope.assignDefense = function() {
			var data = {csrfmiddlewaretoken: csrfmiddlewaretoken};
			document.getElementById("buttonExpert").disabled = true;
			document.getElementById("buttonDefense").disabled = true;
			document.getElementById("waiting").style.visibility="visible";
			$http({
				method: 'POST',
				url: 'assign/defense',
				data: $.param(data),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(data) {
				if (data) {
					document.getElementById("buttonExpert").disabled = false;
					document.getElementById("buttonDefense").disabled = false;
					document.getElementById("waiting").style.visibility="hidden";
					alert('答辩分配成功！');
				}
			}).error(function() {
				document.getElementById("buttonExpert").disabled = false;
				document.getElementById("buttonDefense").disabled = false;
				document.getElementById("waiting").style.visibility="hidden";
				alert('对不起，没有分配成功！~');
			});
		}

		$scope.removeExpert = function() {
			var data = {csrfmiddlewaretoken: csrfmiddlewaretoken};
			document.getElementById("buttonExpert").disabled = true;
			document.getElementById("buttonDefense").disabled = true;
			document.getElementById("waiting").style.visibility="visible";
			$http({
				method: 'POST',
				url: 'assign/removeassign',
				data: $.param(data),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(data) {
				if (data) {
					document.getElementById("buttonExpert").disabled = false;
					document.getElementById("buttonDefense").disabled = false;
					document.getElementById("waiting").style.visibility="hidden";
					alert('成功！');
				}
			}).error(function() {
				document.getElementById("buttonExpert").disabled = false;
				document.getElementById("buttonDefense").disabled = false;
				document.getElementById("waiting").style.visibility="hidden";
				alert('对不起，没有成功！~');
			});
		}

		$scope.removeDefense = function() {
			var data = {csrfmiddlewaretoken: csrfmiddlewaretoken};
			document.getElementById("buttonExpert").disabled = true;
			document.getElementById("buttonDefense").disabled = true;
			document.getElementById("waiting").style.visibility="visible";
			$http({
				method: 'POST',
				url: 'assign/removedefense',
				data: $.param(data),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(data) {
				if (data) {
					document.getElementById("buttonExpert").disabled = false;
					document.getElementById("buttonDefense").disabled = false;
					document.getElementById("waiting").style.visibility="hidden";
					alert('成功！');
				}
			}).error(function() {
				document.getElementById("buttonExpert").disabled = false;
				document.getElementById("buttonDefense").disabled = false;
				document.getElementById("waiting").style.visibility="hidden";
				alert('对不起，没有成功！~');
			});
		}

		$scope.removeStudents = function() {
			var data = {csrfmiddlewaretoken: csrfmiddlewaretoken};
			if (confirm("确定清除数据吗？")) {
				$http({
					method: 'POST',
					url: 'assign/remove_students',
					data: $.param(data),
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).success(function(data) {
					if (data) {
						alert('清除成功');
					}
				}).error(function() {
					alert('对不起，失败！');
				});
			}
		}

		$scope.removeTeachers = function() {
			var data = {csrfmiddlewaretoken: csrfmiddlewaretoken};
			if (confirm("确定清除数据吗？")) {
				$http({
					method: 'POST',
					url: 'assign/remove_teachers',
					data: $.param(data),
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).success(function(data) {
					if (data) {
						alert('清除成功');
					}
				}).error(function() {
					alert('对不起，失败！');
				});
			}
		}
	}
]);