
mainApp.controller('reminderScreenCtrl', ['$rootScope', '$scope', '$state', '$http', 'serverurl', function ($rootScope, $scope, $state, $http, serverurl) {
     $scope.shouldShowDelete = false;
     $scope.shouldShowEdit = false;
     $scope.listCanSwipe = true;
    $scope.reminderDetails = [];
    $http({
        method: 'GET',
        headers: {
            "ContentType": "application/json",
            "x-access-token": $rootScope.TokenId
        },
        url: serverurl + '/getreminderlist'
    })
.then(function success(response) {
    $scope.reminderDetails = response.data;  
}, function error(response) {

    // this function will be called when the request returned error status

});
    $scope.addnewreminders = function () {        
        $state.go('addNewreminder');
        };

    $scope.homescreenview = function () {
        $state.go('homeScreen');
    };

}]);

   