app.controller('ChangePasswordCtrl', [
	'$scope',
	'$http',
	'$location',
	function($scope, $http, $location) {

		$scope.formData = {};
		var csrfmiddlewaretoken = document.getElementsByName('csrfmiddlewaretoken')[0].value;
		$scope.formData.csrfmiddlewaretoken = csrfmiddlewaretoken;

		$scope.submit = function(data) {
			if ($scope.formData.oldPassword && $scope.formData.newPassword && $scope.confirmPassword) {
				if ($scope.formData.oldPassword === $scope.formData.newPassword) {
					$scope.formData.oldPassword = '';
					$scope.formData.newPassword = '';
					$scope.confirmPassword = '';
					alert('对不起，新密码和旧密码不能一样');
					return;
				}
				if ($scope.confirmPassword === $scope.formData.newPassword) {
					$http({
						method: 'POST',
						url: '/assign/changepassword',
						data: $.param(data),
						headers: {
		                    'Content-Type': 'application/x-www-form-urlencoded'
						}
					}).success(function(data) {
						if (data) {
							window.location.reload();
						}
					}).error(function(data) {
						alert('对不起，提交失败！~');
					});
				} else {
					$scope.formData.newPassword = '';
					$scope.confirmPassword = '';
					alert('两次确认修改密码，应该与新密码一致');
				}
			} else {
				alert('请填写相关字段');
			}
		}
	}
]);