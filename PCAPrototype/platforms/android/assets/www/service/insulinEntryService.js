patientApp.service('insulinEntryService', function ($http, serverurllink) {

    //Get All insulin Data
    this.getAllData = function () {
        var retdata = "";
        $.ajax({
            url: serverurllink + "https://pacserver.herokuapp.com/getinsulinentry/",
            type: "Get",
            dataType: "json",
            crossDomain: true,
            async: false,
            success: function (data) {
                retdata = data;
            },
            error: function (msg) {
                alert(msg);
                retdata = null;
                return null;
            }
        });
        return retdata;
    }

    this.Save = function (insulininsave) {
        var request = $http({
            method: "post",
            url: serverurllink + " ",
            data: insulininsave
            });
        return request;
    }

   
});