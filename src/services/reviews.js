'use strict';

app.service('Reviews', [
	'$resource',
	function($resource) {
		var url = '';
		return $resource(url, {
			query: {
				isArray: true,
				method: 'GET',
				responseType: 'json'
			}
		});
	}
]);