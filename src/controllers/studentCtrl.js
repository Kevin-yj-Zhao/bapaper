app.controller('StudentCtrl',[
	'$scope',
	'Students',
	function($scope, Students) {
		// $scope.students = [
		// 	{"Teacher": "苏驷希", 
		// 	"Title": "深度学习在互联网广告精准投放中的应用研究", 
		// 	"ID": "2011210727", 
		// 	"Expert": "", 
		// 	"Name": "于林平"}, 
		// 	{"Teacher": "苏驷希", 
		// 	"Title": "基于浏览和点击行为的用户聚类研究", 
		// 	"ID": "2011210708", 
		// 	"Expert": "", 
		// 	"Name": "赵健"}, 
		// 	{"Teacher": "苏驷希", 
		// 	"Title": "互联网大数据预测模型和实现", 
		// 	"ID": "2011210652", 
		// 	"Expert": "", 
		// 	"Name": "安迪"}
		// 	];
		Students.query(function(data) {
			$scope.students = data;
		});
	}
]);