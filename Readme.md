
# Batman SignalR

Fun with some basic SignalR

Update the connection string in ```wwwroot/js/config.js```

Docker commands to run:
- ```docker build -t batman-signal .```
- ```docker run -d -p 8080:80 --name bat-sig batman-signal```

Open index.html on one browser and controller.html on a mobile device. 
Tilt mobile device and watch the signal react. Tap the screen to turn signal on or off.