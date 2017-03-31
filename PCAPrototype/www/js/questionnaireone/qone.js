mainApp.controller('qoneCtrl', ['$rootScope', '$scope', '$state', '$http', function ($rootScope, $scope, $state, $http) {

    //redirect

    $scope.redirctback = function () {
        $state.go('itemscomplete');
    };
    
    $scope.redirctqtwo = function () {
        $state.go('qtwo');
    };
   
  

    
}]);