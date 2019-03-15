const connection = new signalR.HubConnectionBuilder()
    .withUrl(connectionString)
    .configureLogging(signalR.LogLevel.Information)
    .build();

connection.start().then(function () {
    console.log("connected");
});

connection.on("ReceiveVelocity", function (horizontalVelocity, verticalVelocity) {
    BatmanLight.Velocity.x = horizontalVelocity;
    BatmanLight.Velocity.y = verticalVelocity;
});

connection.on("ReceiveShiningToggle", function () {
    BatmanLight.Shining = !BatmanLight.Shining;
});

Game.Start();