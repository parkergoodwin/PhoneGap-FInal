var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        //Event Called
        //console.log('Received Event: ' + id);

                document.getElementById('headerElement').style = 'display: block; color: green;';


        document.getElementById('deviceVibe').addEventListener('click', () => {
            navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
        })

        window.addEventListener("batterystatus", (status) => {
            document.getElementById('deviceBattery').innerHTML = "Battery Level: " + status.level + "%";
            document.getElementById('deviceVersion').innerHTML = `Device Version: ${device.version}`
        }, false);


        console.log('Received Event: ' + id);
        
    }
};