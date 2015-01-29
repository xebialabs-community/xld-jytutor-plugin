angular
		.module('tutor', [])
		.config(
				function($httpProvider) {

					// The following code retrieves credentials from the main XL Deploy application
					// and tells AngularJS to append them to every request.
					var flexApp = parent.document
							.getElementById("flexApplication");
					if (flexApp)
						$httpProvider.defaults.headers.common.Authorization = flexApp
								.getBasicAuth();

				})
		.controller(
				'TutorController',
				function($http, $scope) {
					

					$scope.submit = function() {
						var dataObj = {
							"commands" : $scope.commands
						};
						$http.post('/api/extension/jytutor', dataObj).
							  success(function(data, status, headers, config) {
					    			$scope.stdout = data.stdout;
									$scope.stderr = data.stderr;
									$scope.exception = data.exception;
									$scope.response = data.entity;
									$scope.status = status
							  }).
							  error(function(data, status, headers, config) {
							    	$scope.stdout = data.stdout;
									$scope.stderr = data.stderr;
									$scope.exception = data.exception;
									$scope.response = data.entity;
									$scope.status = status
							  });							
					};
				});
