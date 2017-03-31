mainApp.controller('moreCtrl', ['$rootScope', '$scope', '$state', '$http', '$ionicPopover', function ($rootScope, $scope, $state, $http, $ionicPopover) {


    //redirect

    $scope.closes = function () {
        $state.go('homeScreen');
    }

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

    $scope.redirctInsulinDataEntry = function () {
        $state.go('insulinDataEntry');

    }

    $scope.redirctFoodDataEntry = function () {
        $state.go('foodDataEntry');

    }
    $scope.redirctAdverseDataEntry = function () {
        $state.go('adverseDataEntry');

    }

    $scope.redirctGlucoseDataEntry = function () {
        $state.go('glucoseDataEntry');

    }
    $scope.redirctDevices = function () {
        $state.go('more');

    }

    $scope.closes = function () {
        $state.go('homeScreen');
    };

    $scope.redirctreminderEntry = function () {
        $state.go('reminderScreen');
    };

    $scope.redirctdeviceEntry = function () {
        $state.go('connectDevices');
    };

}]);