mainApp.controller('graphCtrl', ['$rootScope', '$scope', '$state', '$http', '$ionicPopover', function ($rootScope, $scope, $state, $http, $ionicPopover) {
    //$scope.GlucoseLevelsData1 = {
    //    labels: ["", "", "","","",""],
    //    datasets: [{
    //        pointColor: "#6E4390",
    //        fillColor: "#ffffff",
    //        strokeColor: "#48A4D1",
    //        data: [70,100,170,135]
    //    }]
    //}
    //// get line chart canvas
    //$scope.GlucoseLevelsvar1 = document.getElementById("GlucoseLevelsgraph").getContext("2d");

    ////$scope.GlucoseLevelsvar1.canvas.width = 300;
    ////$scope.GlucoseLevelsvar1.canvas.height = 150;
    //// draw line chart
    //new Chart($scope.GlucoseLevelsvar1).Line($scope.GlucoseLevelsData1);

//Scatter chart
    var ctx = canvas.getContext('2d'),
        w = canvas.width,
        h = canvas.height - 10, // give room for point/text
        maxHeight = 100,
        axisStep = 10;

    function myLog(v, max) {
        var n = v / max;          // normalize
        return n * n * n;         // some log formula
    }

    // draw scale per axis step
    for (var i = 0; i < maxHeight; i += axisStep) {

        // get normalized value, multiply with canvas height and reverse axis
        var y = h - myLog(i, maxHeight) * h;

        // show axis mark each 100
        ctx.moveTo(0, y);
        ctx.lineTo(0, y);
    }

    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#C34783";

    // some random points between 0 and max height
    for (var x = 30; x < w; x += 30) {
        var v = Math.random() * maxHeight,   // some value
            y = h - myLog(v, maxHeight) * h; // convert to y in canvas
        ctx.fillRect(x, y, 7, 7);
        ctx.fillText(v.toFixed(0), x + 9, y + 7);
    }
    var insulinlevelsData = {
        labels: ["", "", "","","","","","","","",],
        datasets: [{
            pointColor: "#6E4390",
            fillColor: "#502B73",
            strokeColor: "#48A4D1",
            data: [0, 0, 0, 9, 4, 2,0,0]
        }]
    }


 // get bar chart canvas
    var insulinlevelsvar = document.getElementById("insulinlevels").getContext("2d");
   // $scope.insulinlevels.canvas.width = 300;
   // $scope.insulinlevels.canvas.height = 150;
    // draw bar chart
    new Chart(insulinlevelsvar).Bar(insulinlevelsData);

    var carbsConsumedData = {
        labels: ["12am","", "6am","", "12pm","", "6pm","", "12am"],
        datasets: [{
            pointColor: "#6E4390",
            fillColor: "#87BC4D",
            strokeColor: "#48A4D1",
            data: [0,0, 45, 15, 75, 0,0,0,0 ]
        }]
    }
    // get bar chart canvas
    var carbsConsumedvar = document.getElementById("carbsConsumed").getContext("2d");
    //$scope.carbsConsumed.canvas.width = 300;
    //$scope.carbsConsumed.canvas.height = 150;
    // draw bar chart
    new Chart(carbsConsumedvar).Bar(carbsConsumedData);


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

    };
    $scope.tographPage = function () {   
        $state.go('graphView');
    }
}]);