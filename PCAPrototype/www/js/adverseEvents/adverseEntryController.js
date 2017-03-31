mainApp.controller('adverseEntryCtrl', ['$rootScope', '$scope', '$state', '$http', 'ionicTimePicker', '$ionicActionSheet', '$timeout', 'serverurl', '$ionicPopup'
    , function ($rootScope, $scope, $state, $http, ionicTimePicker, $ionicActionSheet, $timeout, serverurl, $ionicPopup) {

        var buttonsGroupForEvent = [];
        //event
        $scope.event = "Select Event";
        $scope.selectedEvent = "";

        $scope.close = function () {
            $state.go('homeScreen');
        }

        //$scope.EventActionSheet = function () {

        //    // Show the action sheet
        //    var showActionSheet = $ionicActionSheet.show({
        //        buttons: buttonsGroupForEvent,

        //        buttonClicked: function (index) {
        //            $scope.selectedEvent = $scope.GetEvent[index].value;
        //            $scope.event = "";
        //            return true;
        //        },
        //    });

        //};

        $scope.adverseEventList = function () {
            $state.go('adverseEventList');
            $scope.popover.hide();

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