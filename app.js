function wordCount($scope) {
    $scope.dummy = 'stupid';

	$scope.textCounter = function () {
		 if ($scope.words){
         return $scope.words.split(" ").length;
       }
			
	};

   $scope.longest = function (){ 
      if ($scope.words){
         let arr = $scope.words.split(" ");
         arr.sort((curr,prev) => prev.length - curr.length);
         return arr.filter( a => a === arr[0]).join(",");
      } 
   };
}
 



angular.module('app', []).controller('wordCount', wordCount);