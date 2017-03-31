//angular.module('patientApp.loginCtrl', ['ionic', 'ngCordova'])
mainApp.controller('loginCtrl', ['$rootScope', '$scope', '$state', '$http', 'serverurl', function ($rootScope, $scope, $state, $http, serverurl) {
    $scope.auth = {};
    $scope.auth.email = 'anish@email.com';
    $scope.auth.pwd = 'A12345';
    $scope.login = function (form) {
        if (form.$valid) {
            $scope.data = {
                email: $scope.auth.email
                , password: $scope.auth.pwd
            }
            $http({
                method: 'POST',
                url: serverurl + '/validateuserlogin',
                data: {

                    "email": $scope.auth.email,
                    "password": $scope.auth.pwd
                },
            }).then(function success(response) {
                if (response.data.success == true) {
                    $rootScope.TokenId = response.data.token;
                    $state.go('connectDevices');
                } else {
                    $scope.login_invalidresponse_msg = response.data.message;
                }

            }, function error(response) {
                $scope.login_invalid_msg = "Please enter a valid Email Address and Password.";
                // this function will be called when the request returned error status
            });
        }
    }




    $scope.insert = function (firstname, lastname) {
        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function (res) {
            alert("INSERT ID -> " + res.insertId);
        }, function (err) {
            alert(err);
        });
    }

    $scope.select = function (lastname) {
        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
        $cordovaSQLite.execute(db, query, [lastname]).then(function (res) {
            if (res.rows.length > 0) {
                alert("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item

                    (0).lastname);
            } else {
                alert("No results found");
            }
        }, function (err) {
            console.error(err);
        });
    }


}]);
