//angular.module('patientApp.insulinEntryCtrl', ['ionic', 'onezone-datepicker', 'ionic-timepicker'])
mainApp.controller('insulinEntryCtrl', ['$rootScope', '$scope', '$state', '$http', 'ionicTimePicker', '$ionicActionSheet', '$timeout', 'serverurl', '$ionicPopup'
    , function ($rootScope, $scope, $state, $http, ionicTimePicker, $ionicActionSheet, $timeout, serverurl,$ionicPopup) {
    var buttonsGroup = [];
    var buttonsGroupForEvent = [];
    //type
    $scope.type = "Select Type";
    $scope.selectedType = "";
    //event
    $scope.event = "Select Event";
    $scope.selectedEvent = "";
    //units
    $scope.units = {};
    getInsulinData();

    function getInsulinData() {

        $http({
            method: 'GET',
            headers: {
                "ContentType": "application/json",
                "x-access-token": $rootScope.TokenId
            },
            url:serverurl+'/getinsulinentry' //'https://pacserver.herokuapp.com/getinsulinentry/'

        }).then(function (response) {
            var result = [];
            angular.forEach(response.data.insulintype, function (value, key) {
                result.push({ "id": key, "value": value })
                var text = { "text": '<span class="tab-action">' + value + '</span>' };
                buttonsGroup.push(text);
            });
            $scope.GetInsulinType = result;
            result = [];
            angular.forEach(response.data.selecttype, function (value, key) {
                result.push({ "id": key, "value": value })
                var text = { "text": '<span class="tab-action">' + value + '</span>' };
                buttonsGroupForEvent.push(text);
            });
            $scope.GetEvent = result;
        }, function (response) {
            //some error                
            //console.log(response);
        });
        $scope.TypeActionSheet = function () {
            // Show the action sheet
            var showActionSheet = $ionicActionSheet.show({
                buttons: buttonsGroup,
                buttonClicked: function (index) {
                    $scope.selectedType = $scope.GetInsulinType[index].value;
                    $scope.type = "";
                    return true;
                },
            });
        };
        $scope.EventActionSheet = function () {

            // Show the action sheet
            var showActionSheet = $ionicActionSheet.show({
                buttons: buttonsGroupForEvent,

                buttonClicked: function (index) {
                    $scope.selectedEvent = $scope.GetEvent[index].value;
                    $scope.event = "";
                    return true;
                },
            });

        };
    }

    $scope.saveInsulinEntry = function () {
        $scope.insulin = {
            date: $scope.onezoneDatepicker.date.toDateString(),
            time: $scope.m,
            type: $scope.selectedType,
            event: $scope.selectedEvent,
            unit: $scope.units.value
        };
        $http({
            method: 'POST',
            headers: {
                "ContentType": "application/json",
                "x-access-token": $rootScope.TokenId
            },
            url: serverurl + '/saveinsulinentry',//' https://pacserver.herokuapp.com/saveinsulinentry/',
            data: {

                "insulindate": $scope.insulin.date,
                "insulintime": $scope.insulin.time,
                "insulintype": $scope.insulin.type,
                "eventtype": $scope.insulin.event,
                "insulinunits": $scope.insulin.unit,
            }
        }).then(function success(response) {
            if (response.data.success == 'true') {
                $state.go('homeScreen');
            }
        }, function error(response) {
            //some error                
         //   console.log(response);
        });
    }

    $scope.close = function () {
        $state.go('homeScreen');
    }


    $scope.onezoneDatepicker = {
        date: new Date()
    }

    $scope.m = new Date().toLocaleTimeString().replace(/:\d+ /, ' ');

    var date = new Date();
    var minutes = date.getMinutes();
    var hours = date.getHours();


    var ipObj1 = {
        callback: function (val) {      //Mandatory
            if (typeof (val) === 'undefined') {
                //$scope.t = !$scope.t;

            } else {


                var selectedTime = new Date(val * 1000);
                if (selectedTime.getUTCMinutes() >= 30) {
                    inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)) - (60 * 60);
                }
                else {
                    inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60));
                }

                if (selectedTime.getUTCHours() == (0) && (selectedTime.getUTCMinutes() <= 9)) {
                    $scope.m = ((selectedTime.getUTCHours() + 12) + ':' + '0' + (selectedTime.getUTCMinutes()) + " PM");
                   // $scope.t = "";

                }
                else if (selectedTime.getUTCHours() <= (12) && (selectedTime.getUTCMinutes() <= 9)) {
                    $scope.m = (selectedTime.getUTCHours() + ':' + '0' + (selectedTime.getUTCMinutes()) + " AM");
                  //  $scope.t = "";
                }
                else if ((selectedTime.getUTCHours() > (12)) && (selectedTime.getUTCMinutes() <= 9)) {
                    $scope.m = ((selectedTime.getUTCHours() - 12) + ':' + '0' + selectedTime.getUTCMinutes() + " PM");
                  //  $scope.t = "";
                }
                else if ((selectedTime.getUTCHours() == (0)) && (selectedTime.getUTCMinutes() > 9)) {

                    $scope.m = ((selectedTime.getUTCHours() + 12) + ':' + (selectedTime.getUTCMinutes()) + " PM");
                  //  $scope.t = "";
                }

                else if ((selectedTime.getUTCHours() <= (12)) && (selectedTime.getUTCMinutes() > 9)) {
                    $scope.m = (selectedTime.getUTCHours() + ':' + (selectedTime.getUTCMinutes()) + " AM");
                   // $scope.t = "";

                }

                else if ((selectedTime.getUTCHours() > (12)) && (selectedTime.getUTCMinutes() > 9)) {
                    $scope.m = ((selectedTime.getUTCHours() - 12) + ':' + selectedTime.getUTCMinutes() + " PM");
                   // $scope.t = "";
                }


            }
        },
        inputTime: ((new Date).getHours() == 0 && (new Date).getMinutes() < 30) ? 60 * (new Date).getHours() * 60 + (new Date).getMinutes() * 60 + 11 * 60 * 60 + 12 * 6 : ((new Date).getHours() == 0 && (new Date).getMinutes() >= 30) ? 60 * (new Date).getHours() * 60 + 60 * (new Date).getMinutes() + (60 * 60 * 11) : ((new Date).getHours() == 12 && (new Date).getMinutes() < 30) ? 60 * (new Date).getHours() * 60 + 12 * 60 * 60 + 60 * (new Date).getMinutes() : ((new Date).getHours() == 12 && (new Date).getMinutes() >= 30) ? 60 * (new Date).getHours() * 60 + 60 * (new Date).getMinutes() + (60 * 60 * 11) : ((new Date).getMinutes() >= 30) ? 60 * (new Date).getHours() * 60 + 60 * (new Date).getMinutes() - (60 * 60) : 60 * (new Date).getHours() * 60 + 60 * (new Date).getMinutes(),

        setLabel: 'Select'    //Optional
    };

    $scope.time = function () {
        ionicTimePicker.openTimePicker(ipObj1);
    }
}]);
