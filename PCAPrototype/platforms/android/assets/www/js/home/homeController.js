//angular.module('patientApp.homeScreenCtrl', ['ionic'])

//.controller('homeScreenCtrl', function ($scope, $state) {
mainApp.controller('homeScreenCtrl', ['$rootScope', '$scope', '$state', '$http', '$ionicPopover', function ($rootScope, $scope, $state, $http, $ionicPopover) {
    var GlucoseLevelsData = {
        labels: ["12 am", "6am", "12pm"],
        datasets: [{
            pointColor: "#6E4390",
            fillColor: "#ffffff",
            strokeColor: "#48A4D1",
            data: [8, 10, 2]
        }]
    }
    // get bar chart canvas
    var GlucoseLevelsvar = document.getElementById("GlucoseLevels")
      .getContext("2d");
    // draw bar chart
    new Chart(GlucoseLevelsvar).Line(GlucoseLevelsData);
    $scope.redirctConnectDevices = function () {
        $state.go('foodEntry');
        $scope.popover.hide();
    };
    $scope.redirctInsulinEntry = function () {
        $state.go('insulinEntry');
        $scope.popover.hide();
    }

    $scope.redirctglucose = function () {
        $scope.popover.hide();
    }
    $scope.adverseevent = function () {
        $state.go('adverseEntry');
        $scope.popover.hide();
    }

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function (popover) {
        $scope.popover = popover;
    });

    $scope.floatingmenu = function ($event) {
        $scope.popover.show($event);

    };

    $scope.redirctDiaryEntry = function () {
        $state.go('diaryEntry');
       
    }
    $scope.redirctDevices = function () {
        $state.go('more');

    }
}]);