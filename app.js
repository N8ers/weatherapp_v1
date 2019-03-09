const path = require('path')
const express = require('express')
const request = require('request')
const moment = require('moment')

const app = express();
const publicDirectoryPath = path.join(__dirname, '/public')

app.use(express.static(publicDirectoryPath))
app.set('view engine', 'ejs');

let sush = 'e20fe780791cad1d4d4d7b8484f970a5';
let lat = 39.892692;
let lng = -86.290568;

let apiUrl = `https://api.darksky.net/forecast/${sush}/${lat},${lng}`;

app.get('/', function(req, res) {

    request(apiUrl, function(error, response, body) {
        weather_json = JSON.parse(body);
        // console.log(weather_json.currently.temperature)
        // console.log(weather_json.currently.summary)

        let daytwo = moment(weather_json.daily.data[1].time).format("dddd")
        let daythree = moment(weather_json.daily.data[2].time).format("dddd")
        let dayfour = moment(weather_json.daily.data[3].time).format("dddd")
        let dayfive = moment(weather_json.daily.data[4].time).format("dddd")

        console.log(weather_json.currently.icon)

        // let iconSelector = {
        //     clear-day
        //     clear-night
        //     rain
        //     snow
        //     sleet
        //     wind
        //     fog
        //     cloudy
        //     partly-cloudy-day
        //     partly-cloudy-night
        // }

        let icons = {
            rain: "https://res.cloudinary.com/raphaeladdile/image/upload/s--lV_oG1pX--/v1515194565/rainy-6_pzlrlc.svg",
        }

        let weather = {
            // current
            // currentIcon: weather_json.currently.icon,
            // today 
            currentTemp: Math.round(weather_json.currently.temperature),
            summary: weather_json.currently.summary,
            currentIcon: weather_json.currently.icon,
            currentFeelLike: Math.round(weather_json.currently.apparentTemperature),
            currentHumidity: 100*(weather_json.currently.humidity),
            dailySummary: weather_json.daily.summary,
            todayHi: Math.round(weather_json.daily.data[0].temperatureMax),
            todayLo: Math.round(weather_json.daily.data[0].temperatureMin),
            todayIcon: weather_json.daily.data[0].icon,
            // tomorrow
            dayTwo: daytwo,
            dayTwoHi: Math.round(weather_json.daily.data[1].temperatureMax),
            dayTwoLo: Math.round(weather_json.daily.data[1].temperatureMin),
            dayTwoIcon: weather_json.daily.data[1].icon,
            // day three
            dayThree: daythree,
            dayThreeHi: Math.round(weather_json.daily.data[2].temperatureMax),
            dayThreeLo: Math.round(weather_json.daily.data[2].temperatureMin),
            dayThreeIcon: weather_json.daily.data[2].icon,
            // day four
            dayFour: dayfour,
            dayFourHi: Math.round(weather_json.daily.data[3].temperatureMax),
            dayFourLo: Math.round(weather_json.daily.data[3].temperatureMin),
            dayFourIcon: weather_json.daily.data[3].icon,
            // day five
            dayFive: dayfive,
            dayFiveHi: Math.round(weather_json.daily.data[4].temperatureMax),
            dayFiveLo: Math.round(weather_json.daily.data[4].temperatureMin),
            dayFiveIcon: weather_json.daily.data[4].icon
        }

        // let forecast = {
        //     todayHi: Math.round(weather_json.daily.data.temperature),
        //     todayLo: Math.round(weather_json.daily.temperature)
        //     // dayTwoHi:
        //     // dayTwoLo:
        //     // dayThreeHi:
        //     // dayThreeLo:
        //     // dayFourHi:
        //     // dayFourLo:
        //     // dayFiveHi:
        //     // dayFiveLo: 
        // }

        let weatherData = {weather: weather}
        // let forecastData = {forecast: forecast}
        // let iconSelector = {icons: icons}

        res.render('index', weatherData)
    })

});

app.listen(8000);