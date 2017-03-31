mainApp.controller('qthreeCtrl', ['$rootScope', '$scope', '$state', '$http', function ($rootScope, $scope, $state, $http) {

    //redirect

    $scope.redirctback = function () {
        $state.go('qtwo');
    };

    $scope.redirctqthree = function () {
        $state.go('insulinDataEntry');
    };
}]);