"use strict";

(function () {

    let logEl = document.getElementById("log");

    function log(str) {
        logEl.innerHTML = logEl.innerHTML + str + '<br>';
    }

    const connection = new signalR.HubConnectionBuilder()
        .withUrl(connectionString)
        .configureLogging(signalR.LogLevel.Information)
        .build();

    connection.start().then(function () {
        log("connected");
        
        document.addEventListener("click", function(e) {
            connection.invoke("ToggleShining").catch(function (err) {
                return log("error: " + err.toString());
            });
        });

        window.addEventListener("deviceorientation", handleOrientation, true);    

        let xVelocityFactor = 30;
        let yVelocityFactor = 25;
        
        function handleOrientation(e) {

            let horizontalTilt = e.beta;
            let verticalTilt = e.gamma;

            horizontalTilt = Math.min(90, Math.max(-90, horizontalTilt));
            verticalTilt = Math.min(90, Math.max(-90, verticalTilt)) * -1;

            horizontalTilt *= xVelocityFactor;
            verticalTilt *= yVelocityFactor;          

            connection.invoke("SetVelocity", horizontalTilt, verticalTilt).catch(function (err) {
                return log("error: " + err.toString());
            });
        }
    });
})();