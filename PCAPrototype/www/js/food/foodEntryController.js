//angular.module('patientApp.foodEntryCtrl', ['ionic', 'onezone-datepicker', 'ionic-timepicker'])

//.controller('foodEntryCtrl', function ($scope, $state, ionicTimePicker, $http, $ionicActionSheet, $timeout) {
mainApp.controller('foodEntryCtrl', ['$rootScope', '$scope', '$state', '$http', 'ionicTimePicker', '$ionicActionSheet', '$timeout', function ($rootScope, $scope, $state, $http, ionicTimePicker, $ionicActionSheet, $timeout) {

  
    //redirect
    $scope.redirctConnectDevices = function () {
        $state.go('connectDevices');
    };
     
    //type
    $scope.select = "Select Type";
    
    //datepicker
    $scope.onezoneDatepicker = {
        date: new Date()
        
    }

    //timepicker
    $scope.t = new Date().toLocaleTimeString().replace(/:\d+ /, ' ');

    var ipObj1 = {
        callback: function (val) {      //Mandatory
            if (typeof (val) === 'undefined') {
               
                console.log('Time not selected');

            } else {


                var selectedTime = new Date(val * 1000);
                if (selectedTime.getUTCMinutes() >= 30) {
                    inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)) - (60 * 60);
                }
                else {
                    inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60));
                }

                console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
                if (selectedTime.getUTCHours() == (0) && (selectedTime.getUTCMinutes() <= 9)) {
                    $scope.t = ((selectedTime.getUTCHours() + 12) + ':' + '0' + (selectedTime.getUTCMinutes()) + " PM");
                    //$scope.t = "";

                }
                else if (selectedTime.getUTCHours() <= (12) && (selectedTime.getUTCMinutes() <= 9)) {
                    $scope.t = (selectedTime.getUTCHours() + ':' + '0' + (selectedTime.getUTCMinutes()) + " AM");
                    //$scope.t = "";
                }
                else if ((selectedTime.getUTCHours() > (12)) && (selectedTime.getUTCMinutes() <= 9)) {
                    $scope.t = ((selectedTime.getUTCHours() - 12) + ':' + '0' + selectedTime.getUTCMinutes() + " PM");
                    //$scope.t = "";
                }
                else if ((selectedTime.getUTCHours() == (0)) && (selectedTime.getUTCMinutes() > 9)) {

                    $scope.t = ((selectedTime.getUTCHours() + 12) + ':' + (selectedTime.getUTCMinutes()) + " PM");
                    //$scope.t = "";
                }

                else if ((selectedTime.getUTCHours() <= (12)) && (selectedTime.getUTCMinutes() > 9)) {
                    $scope.t = (selectedTime.getUTCHours() + ':' + (selectedTime.getUTCMinutes()) + " AM");
                    //$scope.t = "";

                }

                else if ((selectedTime.getUTCHours() > (12)) && (selectedTime.getUTCMinutes() > 9)) {
                    $scope.t = ((selectedTime.getUTCHours() - 12) + ':' + selectedTime.getUTCMinutes() + " PM");
                    //$scope.t = "";
                }


            }
        },


        inputTime: ((new Date).getHours() == 0 && (new Date).getMinutes() < 30) ? 60 * (new Date).getHours() * 60 + (new Date).getMinutes() * 60 + 12 * 60 * 60  : ((new Date).getHours() == 0 && (new Date).getMinutes() >= 30) ? 60 * (new Date).getHours() * 60 + 60 * (new Date).getMinutes() + (60 * 60 * 11) : ((new Date).getHours() == 12 && (new Date).getMinutes() < 30) ? 60 * (new Date).getHours() * 60 + 12 * 60 * 60 + 60 * (new Date).getMinutes() : ((new Date).getHours() == 12 && (new Date).getMinutes() >= 30) ? 60 * (new Date).getHours() * 60 + 60 * (new Date).getMinutes() + (60 * 60 * 11) : ((new Date).getMinutes() >= 30) ? 60 * (new Date).getHours() * 60 + 60 * (new Date).getMinutes() - (60 * 60) : 60 * (new Date).getHours() * 60 + 60 * (new Date).getMinutes(),
        setLabel: 'Select'    //Optional
    };


    //displays timepicker
    $scope.time = function () {
        ionicTimePicker.openTimePicker(ipObj1);
        

    }

    //post method
    $scope.formData = {};
    

    $scope.save = function (form) {
        if (form.$valid) {
            $scope.formData = {
                date: $scope.onezoneDatepicker.date.toDateString(),
                time: $scope.t,
                type: $scope.user,
                carbs: $scope.formData.carbs

            }
            
            if ($scope.formData.type==null) {
                $scope.login_invalid_msg = 'Please select type';
                

            }

            else{

            $http({
                method: 'POST',
                url: ' https://pacserver.herokuapp.com/savefoodentry/',
                data: {

                    "fooddate": $scope.formData.date,
                    "foodtime": $scope.formData.time,
                    "foodtype": $scope.formData.type,
                    "carbs": $scope.formData.carbs,


                },
                headers: {
                    "ContentType": "application/json",
                    "x-access-token": $rootScope.TokenId
                }
            }).then(function success(response) {
                if (response.data.success == 'true') {                  
                    $state.go('homeScreen');
                }
                

            }, function error(response) {
                
                // this function will be called when the request returned error status
            });

        }

        }



    }
     

    

    //get method

    $http({
        method: 'GET',
        headers: {
            "ContentType": "application/json",
            "x-access-token": $rootScope.TokenId
        },
        url: 'https://pacserver.herokuapp.com/getfoodentry/'
    })
.then(function success(response) {

    $scope.items = response.data.snackstype;
    

       


    }, function error(response) {

        // this function will be called when the request returned error status

    });

    // Triggered on a button click, or some other target for action-sheet
    $scope.show = function () {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
              { text: $scope.items[0] },
              { text: $scope.items[1] },
              { text: $scope.items[2] },
              { text: $scope.items[3] },

            ],
            cancelText: 'Close',

            buttonClicked: function (index) {
                
                    $scope.user = $scope.items[index];
                    $scope.select = "";
                
            }
        });

        

    };

    $scope.closes = function () {
        $state.go('homeScreen');
    }

}]);

