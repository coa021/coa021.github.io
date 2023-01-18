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
            title: "Time (mm:ss)",
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

    var bothPressureOptions = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Both Pressure Graphs"
        },
        axisX: {
            valueFormatString: "mm:ss",
            title: "Time (mm:ss)",
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
            axisYIndex: 0, //defaults to 0
            dataPoints: dataPointsPressure
        },
        {
            type: "spline",
            axisYIndex: 1,
            xValueFormatString: "mm:ss",
            dataPoints: dataPointsPressure2
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
            title: "Time (mm:ss)",
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
            title: "Time (mm:ss)",
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
            title: "Time (mm:ss)",
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
        title: {
            text: "Sound Graph"
        },
        axisX: {
            valueFormatString: "mm:ss",
            title: "Time (mm:ss)",
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
            title: "Time (mm:ss)",
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

    function drawGraphs(data) {
        for (var i = 1; i < 778; i++) {
            var humidity = data[i]["Humidity Run 1"];
            var pressure = data[i]["Pressure Run 1"];
            var pressure2 = data[i]["Pressure Run 1__1"];
            var light = data[i]["Light Run 1"];
            var sound = data[i]["Sound Run 1"];
            var temp = data[i]["Temperature Run 1"];

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
            dataPointsPressure.push({
                x: t,
                y: pressure,

            });
            dataPointsPressure2.push({
                x: t,
                y: pressure2
            });
            dataPointsLight.push({
                x: t,
                y: light
            });
            dataPointsSound.push({
                x: t,
                y: sound
            });
            dataPointsTemperature.push({
                x: t,
                y: temp
            });
        }
        
        $("#humidityChart").CanvasJSChart(humidityOptions);
        $("#bothPressureCharts").CanvasJSChart(bothPressureOptions);
        $("#pressureChart").CanvasJSChart(pressureOptions);
        $("#pressure2Chart").CanvasJSChart(pressure2Options);
        $("#lightChart").CanvasJSChart(lightOptions);
        $("#soundChart").CanvasJSChart(soundOptions);
        $("#temperatureChart").CanvasJSChart(temperatureOptions);
    }
    $.getJSON("csvjson.json", drawGraphs);
}