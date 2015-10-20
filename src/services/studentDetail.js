'use strict';

app.service('StudentDetail', [
	'$resource',
	function($resource) {
		return $resource('/assign/student/:studentID', {
            studentID: '@id'
        }, {
			get: {
				method: 'GET',
				responseType: 'json'
			}
		});
	}
]);