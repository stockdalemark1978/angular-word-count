function wordCount($scope) {
    $scope.dummy = 'stupid';
    $scope.inputText = "";
    $scope.count;
	$scope.$watch("words", textCounter);

	function textCounter(input) {
		if (input) {
			let arr = input.split(' ');
			$scope.count = arr.length;
		}
	};
}
 



angular.module('app', []).controller('wordCount', wordCount);