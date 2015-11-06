app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/students', {
				templateUrl:'pages/students.html',
				controller:'StudentCtrl'
			}).
			when('/student/:studentId', {
				templateUrl:'pages/studentDetail.html',
				controller: 'StudentDetailCtrl'
			}).
			when('/reviews', {
				templateUrl:'pages/reviews.html',
				controller:'ReviewCtrl'
			}).
			when('/review/:studentId', {
				templateUrl:'pages/reviewDetail.html',
				controller: 'ReviewDetailCtrl'
			}).
			when('/admin', {
				templateUrl: 'pages/admin.html',
				controller:'AdminCtrl'
			}).
			when('/viewtask/:studentId', {
				templateUrl:'pages/adminDetail.html',
				controller: 'AdminDetailCtrl'
			}).
			when('/changePassword', {
				templateUrl:'pages/changePassword.html',
				controller:'ChangePasswordCtrl'
			}).
			otherwise({
				redirectTo:'/students'
			});
	}
]);