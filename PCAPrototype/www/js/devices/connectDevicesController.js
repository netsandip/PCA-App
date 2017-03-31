//angular.module('patientApp.connectDevicesCtrl', ['ionic'])

//.controller('connectDevicesCtrl', function ($scope, $state) {
mainApp.controller('connectDevicesCtrl', ['$rootScope', '$scope', '$state', '$http', function ($rootScope, $scope, $state, $http) {
    $scope.redirectDevicesReg = function () {
        //$state.go('connectDevicesRegister');
        $state.go('reminderScreen');
    };
}]);