
mainApp.controller('addNewreminderCtrl', ['$rootScope', '$scope', '$state', '$http', 'ionicTimePicker', 'serverurl', function ($rootScope, $scope, $state, $http, serverurl) {
        $scope.saveNewreminders = function () {        
        $state.go('reminderScreen');
        };

    $scope.close = function () {
        $state.go('reminderScreen');
    };

}]);

   