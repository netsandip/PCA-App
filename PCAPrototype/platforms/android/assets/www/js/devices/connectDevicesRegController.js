//angular.module('patientApp.connectDevicesRegCtrl', ['ionic'])

//.controller('connectDevicesRegCtrl', function ($scope, $state) {
mainApp.controller('connectDevicesRegCtrl', ['$rootScope', '$scope', '$state', '$http', function ($rootScope, $scope, $state, $http) {
    $scope.reminderpage = function () {
        $state.go('reminderScreen');
    };
}]);