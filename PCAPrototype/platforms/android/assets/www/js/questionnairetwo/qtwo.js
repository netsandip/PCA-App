mainApp.controller('qtwoCtrl', ['$rootScope', '$scope', '$state', '$http', function ($rootScope, $scope, $state, $http) {

    //redirect

    $scope.redirctback = function () {
        $state.go('qone');
    };

    $scope.redirctqthree = function () {
        $state.go('qthree');
    };
}]);