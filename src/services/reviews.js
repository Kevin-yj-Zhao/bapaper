'use strict';

app.service('Reviews', [
	'$resource',
	function($resource) {
		return $resource('/assign/reviews', {
			query: {
				isArray: true,
				method: 'GET',
				responseType: 'json'
			}
		});
	}
]);