// Ionic Starter App
var db = null;
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var mainApp = angular.module('patientApp', ['ionic', 'ngCordova', 'onezone-datepicker', 'ionic-timepicker']);
//angular.module('patientApp', ['ionic', 'patientApp.loginCtrl', 'patientApp.connectDevicesCtrl', 'patientApp.connectDevicesRegCtrl', 'patientApp.reminderScreenCtrl', 'patientApp.homeScreenCtrl', 'patientApp.foodEntryCtrl', 'ngCordova'])

mainApp.run(function ($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function () {
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        db = $cordovaSQLite.openDB("patientApp.db");
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key,firstname text, lastname text)");
    });
});
mainApp.constant('serverurl', 'https://pacserver.herokuapp.com');
mainApp.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.transition('none');

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'views/login/login.html',
        controller: 'loginCtrl'
    })
     .state('connectDevices', {
         url: '/connectDevices',
         templateUrl: 'views/connectDevices/connectDevices.html',
         controller: 'connectDevicesCtrl'
     })
     .state('insulinEntry', {
         url: '/insulinEntry',
         templateUrl: 'views/insulin/insulinEntry.html',
         controller: 'insulinEntryCtrl'
     })
        .state('itemscomplete', {
            url: '/itemscomplete',
            templateUrl: 'views/itemscomplete/itemscomplete.html',
            controller: 'itemscompleteCtrl'
        })
        .state('more', {
            url: '/more',
            templateUrl: 'views/more/more.html',
            controller: 'moreCtrl'
        })
         .state('qone', {
             url: '/qone',
             templateUrl: 'views/questionnaireone/qone.html',
             controller: 'qoneCtrl'
         })
         .state('qtwo', {
             url: '/qtwo',
             templateUrl: 'views/questionnairetwo/qtwo.html',
             controller: 'qtwoCtrl'
         })
        .state('qthree', {
            url: '/qthree',
            templateUrl: 'views/questionnairethree/qthree.html',
            controller: 'qthreeCtrl'
        })
        .state('insulinDataEntry', {
            url: '/insulinDataEntry',
            templateUrl: 'views/insulin/insulinDataEntry.html',
            controller: 'insulinDataEntryCtrl'
        })
         .state('foodDataEntry', {
             url: '/foodDataEntry',
             templateUrl: 'views/food/foodDataEntry.html',
             controller: 'foodDataEntryCtrl'
         })
         .state('adverseDataEntry', {
             url: '/adverseDataEntry',
             templateUrl: 'views/adverseEvents/adverseDataEntry.html',
             controller: 'adverseDataEntryCtrl'
         })
         .state('glucoseDataEntry', {
             url: '/glucoseDataEntry',
             templateUrl: 'views/glucoseData/glucoseDataEntry.html',
             controller: 'glucoseDataEntryCtrl'
         })
         .state('adverseEntry', {
             url: '/adverseEntry',
             templateUrl: 'views/adverseEvents/adverseEntry.html',
             controller: 'adverseEntryCtrl'
         })
         .state('adverseEventList', {
             url: '/adverseEventList',
             templateUrl: 'views/adverseEvents/adverseEventList.html',
             controller: 'adverseEventListCtrl'
         })
        .state('foodEntry', {
            url: '/foodEntry',
            templateUrl: 'views/food/foodEntry.html',
            controller: 'foodEntryCtrl'
        })
         
         .state('diaryEntry', {
             url: '/diaryEntry',
             templateUrl: 'views/diary/diaryEntry.html',
             controller: 'diaryEntryCtrl'
         })
    .state('connectDevicesRegister', {
        url: '/connectDevicesRegister',
        templateUrl: 'views/connectDevices/connectDevicesReg.html',
        controller: 'connectDevicesRegCtrl'
    })
    .state('reminderScreen', {
        url: '/reminderScreen',
        templateUrl: 'views/reminder/reminder.html',
        controller: 'reminderScreenCtrl'
    })
    .state('addNewreminder', {
        url: '/addNewreminder',
        templateUrl: 'views/reminder/addNewreminder.html',
        controller: 'addNewreminderCtrl'
    })
     .state('homeScreen', {
         url: '/homeScreen',
         templateUrl: 'views/home/home.html',
         controller: 'homeScreenCtrl'
        })

        .state('graphView', {
            url: '/graphView',
            templateUrl: 'views/home/graphView.html',
            controller: 'graphCtrl'
    });
    $urlRouterProvider.otherwise('login');

});