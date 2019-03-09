const express = require('express');
const request = require('request-promise');

let app = express();

app.set('view engine', 'ejs');

let sush = 'e20fe780791cad1d4d4d7b8484f970a5';
let lat = 39.892692;
let lng = -86.290568;

let apiUrl = `https://api.darksky.net/forecast/${sush}/${lat},${lng}`;
console.log(apiUrl)

app.get('/', function(req, res) {

    request(apiUrl, function(error, response, body) {
        weather_json = JSON.parse(body);
        // console.log(weather_json.currently.temperature)
        // console.log(weather_json.currently.summary)
        
        let weather = {
            currentTemp: Math.round(weather_json.currently.temperature),
            summary: weather_json.currently.summary,
            currentIcon: weather_json.currently.icon,
            currentFeelLike: Math.round(weather_json.currently.apparentTemperature),
            currentHumidity: 100*(weather_json.currently.humidity)
        }

        let weatherData = {weather: weather}

        res.render('index', weatherData)
    })

});

app.listen(8000);