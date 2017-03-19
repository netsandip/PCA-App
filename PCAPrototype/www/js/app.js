// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var mainApp = angular.module('starter', ['ionic']);
mainApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });  
})
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'index.html',
                controller: 'accountCtrl'
            })
			.state('account', {
                url: '/account',
                templateUrl: 'account.html',
                controller: 'connectCtrl'
            })
			.state('connectDevices', {
                url: '/connectDevices',
                templateUrl: 'connectDevices.html',
                controller: 'devicesCtrl'
            })
			.state('connectDevicesreg', {
                url: '/connectDevicesreg',
                templateUrl: 'connectDevicesreg.html',
                controller: 'connectDevicesregCtrl'
            })
			.state('homeScreen', {
                url: '/homeScreen',
                templateUrl: 'reminderScreen.html',
                controller: 'homeScreenCtrl'
			})
            .state('insulinEntry', {
			    url: '/insulinEntry',
			    templateUrl: 'insulinEntry.html',
			    controller: 'insulinEntryCtrl'
			});
		 					
      // $urlRouterProvider.otherwise('/users');
    });
mainApp.controller('accountCtrl', function($scope, $location, $window) {

$scope.redirectAccuntpage = function () {
        console.log("Inside redirect Function");
		var link = 'account.html';
		$window.location.href= link;
		//$location.path("/account");
		
    };
})
mainApp.controller('connectCtrl', function($scope, $location, $window) {
console.log("Inside Main page Function");
$scope.redirctMainpage = function () {
        console.log("Inside Main page Function");
		var home_link = 'connectDevices.html';
		$window.location.href= home_link ;
		//$location.path("/account");
		
    };
})
mainApp.controller('devicesCtrl', function($scope, $location, $window) {
console.log("Inside devices page Function");
$scope.redirectDevicesReg = function () {
        console.log("Inside Main page Function");
		var dev_link = 'connectDevicesreg.html';
		$window.location.href=  dev_link;
		//$location.path("/account");
		
    };
})
mainApp.controller('connectDevicesregCtrl', function($scope, $location, $window) {
console.log("Inside devices page Function");
$scope.reminderpage = function () {
        console.log("Inside reminder page Function");
		var re_link = 'reminderScreen.html';
		$window.location.href=  re_link;
		//$location.path("/account");
		
    };
})
mainApp.controller('homeScreenCtrl', function($scope, $location, $window) {
console.log("Inside home page Function");
$scope.homescreenview = function () {
        console.log("Inside home page Function");
		var home_link = 'homepage.html';
		$window.location.href=  home_link;
		//$location.path("/account");		
    };
})

mainApp.controller("insulinEntryCtrl", function ($scope) {
    console.log("Inside Main page Function");
    $scope.insulinDate = Date.now();
})

mainApp.controller("graphCtrl", function($scope) {
	console.log("Inside Main page Function");
    $scope.labels = ["12am", "6am", "12pms"];
    //$scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [0, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
	$scope.type = 'point';
 
});
