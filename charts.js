window.onload = function () {
    // "#FF0000",	//red
    // "#00ff00",	//green
    // "#0000ff",	//blue
    // "#ae00ff",	//purple
    // "#f5c542",	//orange    

    var dataPointsHumidity = [];
    var dataPointsPressure = [];
    var dataPointsPressure2 = [];
    var dataPointsLight = [];
    var dataPointsSound = [];
    var dataPointsTemperature = [];

    var humidityOptions = {
        colorSet: "#FF0000",
        animationEnabled: true,
        

        theme: "light2",
        title: {
            text: "Humidity Graph"
        },
        axisX: {
            valueFormatString: "mm:ss",
            title :"Time (mm:ss)",
            interval: 1,
            intervalType: "minute"
        },
        axisY: {
            title: "Humidity (%)",
            titleFontSize: 24
        },
        data: [{
            type: "spline",
            lineColor: "#0000ff",
            xValueFormatString: "mm:ss",
            yValueFormatString: "####.#",
            dataPoints: dataPointsHumidity
        }]
    };

    var pressureOptions = {
        animationEnabled: true,
        theme: "light2",
        

        title: {
            text: "Pressure Graph Nr. 1"
        },
        axisX: {
            valueFormatString: "mm:ss",
            title :"Time (mm:ss)",
            interval: 1,
            intervalType: "minute"
        },
        axisY: {
            title: "Pressure (kPa)",
            titleFontSize: 24
        },
        data: [{
            type: "spline",
            lineColor: "#ae00ff",
            xValueFormatString: "mm:ss",
            yValueFormatString: "####.#",
            dataPoints: dataPointsPressure
        }]
    };

    var pressure2Options = {
        animationEnabled: true,
        theme: "light2",
        
        title: {
            text: "Pressure Graph Nr. 2"
        },
        axisX: {
            valueFormatString: "mm:ss",
            title :"Time (mm:ss)",
            interval: 1,
            intervalType: "minute"
        },
        axisY: {
            title: "Pressure (kPa)",
            titleFontSize: 24
        },
        data: [{
            type: "spline",
            lineColor: "#f5c542",
            xValueFormatString: "mm:ss",
            yValueFormatString: "####.#",
            dataPoints: dataPointsPressure2
        }]
    };

    var lightOptions = {
        animationEnabled: true,
        theme: "light2",
        
        title: {
            text: "Light Graph"
        },
        axisX: {
            valueFormatString: "mm:ss",
            title :"Time (mm:ss)",
            interval: 1,
            intervalType: "minute"
        },
        axisY: {
            title: "Light (lm)",
            titleFontSize: 24
        },
        data: [{
            type: "spline",
            lineColor: "#ff0088",
            xValueFormatString: "mm:ss",
            yValueFormatString: "####.#",
            dataPoints: dataPointsLight
        }]
    };

    var soundOptions = {
        animationEnabled: true,
        theme: "light2",
        //,
        title: {
            text: "Sound Graph"
        },
        axisX: {
            valueFormatString: "mm:ss",
            title :"Time (mm:ss)",
            interval: 1,
            intervalType: "minute"
        },
        axisY: {
            title: "Sound (dB)",
            titleFontSize: 24
        },
        data: [{
            type: "spline",
            lineColor: "#00ff00",
            xValueFormatString: "mm:ss",
            yValueFormatString: "####.#",
            dataPoints: dataPointsSound
        }]
    };

    var temperatureOptions = {
        animationEnabled: true,
        theme: "light2",
        
        title: {
            text: "Temperature Graph"
        },
        axisX: {

            valueFormatString: "mm:ss",
            title :"Time (mm:ss)",
            interval: 1,
            intervalType: "minute"
            
        },
        axisY: {
            title: "Temperature (°C)",
            titleFontSize: 24
        },
        data: [{
            type: "spline",
            lineColor: "#FF0000",
            xValueFormatString: "mm:ss",
            yValueFormatString: "####.#",
            dataPoints: dataPointsTemperature
        }]
    };


    function addHumudity(data) {
        for (var i = 1; i < 778; i++) {
            var humidity = data[i]["Humidity Run 1"];
            var time = data[i]["Time"];
            var t = new Date(2022, 11, 3); // Epoch
            var minutes = Math.floor(time / 60);
            var seconds = time - minutes * 60;
            t.setMinutes(minutes);
            t.setSeconds(seconds);
             
            dataPointsHumidity.push({
                x: t,
                y: humidity
            });
        }
        $("#humidityChart").CanvasJSChart(humidityOptions);
    }
    function addPressure(data) {
        for (var i = 1; i < 778; i++) {
            var pressure = data[i]["Pressure Run 1"];
            var time = data[i]["Time"];
            var t = new Date(2022, 11, 3); // Epoch
            var minutes = Math.floor(time / 60);
            var seconds = time - minutes * 60;
            t.setMinutes(minutes);
            t.setSeconds(seconds);

            dataPointsPressure.push({
                x: t,
                y: pressure
            });
        }
        $("#pressureChart").CanvasJSChart(pressureOptions);
    }
    function addPressure2(data) {
        for (var i = 1; i < 778; i++) {
            var pressure2 = data[i]["Pressure Run 1__1"];
            var time = data[i]["Time"];
            var t = new Date(2022, 11, 3); // Epoch
            var minutes = Math.floor(time / 60);
            var seconds = time - minutes * 60;
            t.setMinutes(minutes);
            t.setSeconds(seconds);

            dataPointsPressure2.push({
                x: t,
                y: pressure2
            });
        }
        $("#pressure2Chart").CanvasJSChart(pressure2Options);
    }
    function addLight(data) {
        for (var i = 1; i < 778; i++) {
            var light = data[i]["Light Run 1"];
            var time = data[i]["Time"];
            var t = new Date(2022, 11, 3); // Epoch
            var minutes = Math.floor(time / 60);
            var seconds = time - minutes * 60;
            t.setMinutes(minutes);
            t.setSeconds(seconds);

            dataPointsLight.push({
                x: t,
                y: light
            });
        }
        $("#lightChart").CanvasJSChart(lightOptions);
    }
    function addSound(data) {
        for (var i = 1; i < 778; i++) {
            var sound = data[i]["Sound Run 1"];
            var time = data[i]["Time"];
            var t = new Date(2022, 11, 3); // Epoch
            var minutes = Math.floor(time / 60);
            var seconds = time - minutes * 60;
            t.setMinutes(minutes);
            t.setSeconds(seconds);

            dataPointsSound.push({
                x: t,
                y: sound
            });
        }
        $("#soundChart").CanvasJSChart(soundOptions);
    }
    function addTemperature(data) {
        for (var i = 1; i < 778; i++) {
            var temp = data[i]["Temperature Run 1"];
            var time = data[i]["Time"];
            var t = new Date(2022, 11, 3); // Epoch
            var minutes = Math.floor(time / 60);
            var seconds = time - minutes * 60;
            t.setMinutes(minutes);
            t.setSeconds(seconds);

            dataPointsTemperature.push({
                x: t,
                y: temp
            });
        }
        $("#temperatureChart").CanvasJSChart(temperatureOptions);
    }
    $.getJSON("csvjson.json", addHumudity);
    $.getJSON("csvjson.json", addPressure);
    $.getJSON("csvjson.json", addPressure2);
    $.getJSON("csvjson.json", addLight);
    $.getJSON("csvjson.json", addSound);
    $.getJSON("csvjson.json", addTemperature);

}