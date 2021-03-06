app.controller('StudentDetailCtrl',[
	'$scope',
	'$http',
	'$routeParams',
	function($scope, $http, $routeParams) {
		var url = '/assign/student/' + $routeParams.studentId;
		$http.get(url)
			.success(function(data) {
				$scope.formData = data;
				var csrfmiddlewaretoken = document.getElementsByName('csrfmiddlewaretoken')[0].value;
				$scope.formData.csrfmiddlewaretoken = csrfmiddlewaretoken;
			});


		$scope.submit = function(data) {
			$scope.formData = data;
			if ($scope.formData.Type3 == null || $scope.formData.Type3 == "") {
				alert('您没有指定课题方向，请填写类别3！');
				return;
			}
			$scope.formData.Status = 0;
			$http({
				method: 'POST',
				url: url,
				data: $.param($scope.formData),
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(data) {
				if (data) {
					alert('提交成功！');
				}
			}).error(function(data) {
				alert(data);
			});
		}

		$scope.selectType1 = [{
			id: '1',
			name: '工程实践类'
		}, {
			id: '2',
			name: '研究设计类'
		}, {
			id: '3',
			name: '理论分析类'
		}];

		$scope.selectType2 = [{
			id: '1',
			name: '软件'
		}, {
			id: '2',
			name: '硬件'
		}, {
			id: '3',
			name: '软硬结合'
		}, {
			id: '4',
			name: '非软硬件'
		}];

		$scope.selectType3 = [{
			id: '1',
			name: '无线通信理论技术'
		}, {
			id: '2',
			name: '通信网络理论技术'
		}, {
			id: '3',
			name: '数字内容与多媒体通信'
		}];


		$scope.selectType4 = [{
			id: '1',
			name: '大学生创新设计'
		}, {
			id: '2',
			name: '科研项目'
		}, {
			id: '3',
			name: '非科研项目'
		}, {
			id: '4',
			name: '其他项目'
		},{
			id: '5',
			name: '教师课题'
		}];
	}
]);