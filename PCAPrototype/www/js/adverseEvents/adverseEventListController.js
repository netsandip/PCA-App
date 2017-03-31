mainApp.controller('adverseEventListCtrl', ['$rootScope', '$scope', '$state', '$http', 'ionicTimePicker', '$ionicActionSheet', '$timeout', 'serverurl', '$ionicPopup'
    , function ($rootScope, $scope, $state, $http, ionicTimePicker, $ionicActionSheet, $timeout, serverurl, $ionicPopup) {

       
        $scope.Done = function () {
            $state.go('adverseEntry');
        }
      
                   
    }]);