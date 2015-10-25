app.service('User', [
	'$resource',
	function($resource) {
		return $resource('/assign/userinfo');
	}
]);