
mainApp.controller('itemscompleteCtrl', ['$rootScope', '$scope', '$state', '$http', function ($rootScope, $scope, $state, $http) {

    //redirect
    
    $scope.redirctback = function () {
        $state.go('insulinDataEntry');
    };
   
    $scope.redirctqone = function () {
        $state.go('qone');
    };
}]);