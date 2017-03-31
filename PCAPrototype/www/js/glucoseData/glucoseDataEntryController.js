mainApp.controller('glucoseDataEntryCtrl', ['$rootScope', '$scope', '$state', '$http', '$ionicPopover', function ($rootScope, $scope, $state, $http, $ionicPopover) {
    $scope.redirctitem = function () {
        $state.go('itemscomplete');

    }

    //redirect
    $scope.redirctback = function () {
        $state.go('diaryEntry');
    };
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

    $http.get('json/glucosedata.json')

                .success(function (data) {
                    $scope.glucoseDetails = data; // binding the data to the $scope variable
                })


    $scope.now = new Date().toDateString();
    $scope.redirctDevices = function () {
        $state.go('more');

    }

}]);