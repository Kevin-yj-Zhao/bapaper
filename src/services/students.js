'use strict';

app.service('Students', [
	'$resource',
	function($resource) {
		return $resource('/assign/students', {
			query: {
				isArray: true,
				method: 'GET',
				responseType: 'json'
			}
		});
	}
]);