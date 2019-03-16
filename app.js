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

app.get('/', function (req, res) {

    request(apiUrl, function (error, response, body) {

        if (response.statusCode === 404) {
            console.log('hey, hi, i didnt work - am i internet?')
        }

        weather_json = JSON.parse(body);

        let dataDayThree = weather_json.daily.data[2].time;
        let dataDayFour = weather_json.daily.data[3].time;
        let dataDayFive = weather_json.daily.data[4].time

        let daytwo = moment.unix(weather_json.daily.data[1].time).format("ddd")
        let daythree = moment.unix(dataDayThree).format("ddd")
        let dayfour = moment.unix(dataDayFour).format("ddd")
        let dayfive = moment.unix(dataDayFive).format("ddd")

        let iconCurrentlyOut = weather_json.currently.icon;
        let iconTodayOut = weather_json.daily.data[0].icon;
        let iconTomorrowOut = weather_json.daily.data[1].icon;
        let iconDay3Out = weather_json.daily.data[2].icon;
        let iconDay4Out = weather_json.daily.data[3].icon;
        let iconDay5Out = weather_json.daily.data[4].icon;

        function iconLooper(x) {

            switch (x) {
                case 'rain':
                    iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--lV_oG1pX--/v1515194565/rainy-6_pzlrlc.svg";
                    break;
                case 'snow':
                    iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--EsqjgOhi--/v1515194606/snowy-6_zl9kwx.svg";
                    break;
                case 'clear-day':
                    iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s---6vDoixr--/v1515194528/day_shry4k.svg";
                    break;
                case 'clear-night':
                    iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--CxSp0zXi--/v1515194530/night_quuh8p.svg";
                    break;
                case 'sleet':
                    iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--yeTLFcMd--/v1515194570/rainy-7_sdbkyl.svg";
                    break;
                case 'wind':
                    iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg"
                    break;
                case 'fog':
                    iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg"
                    break;
                case 'cloudy':
                    iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg";
                    break;
                case 'partly-cloudy-day':
                    iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--pkzBuC_i--/v1515194500/cloudy-day-1_n3vykl.svg";
                    break;
                case 'snow':
                    iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--DdrT7Iph--/v1515194500/cloudy-night-1_ro8fb5.svg";
                    break;
                default:
                    console.log('i dont know whats goin on')
                    iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg";
                    defaultTest = "i am an unkno"
            }
            return iconCurrently
        }

        ///////////////////////////////////////////////////////////////////////////////////////////////
        // if default in switch is activated add in what the actual weather is, like 'thunderstorms' //
        //////////////////////////////////////////////////////////////////////////////////////////////

        // function updateTime() {
        //     dayTime = moment().format("dddd h:mma")
        //     console.log(dayTime)
        //     return dayTime
        //  }
        //  setInterval(updateTime, 5000)

        let weather = {
            // date & time
            //dayTime: updateTime(),
            date: moment().format("MMM Do, YYYY"),
            // current
            currentTemp: Math.round(weather_json.currently.temperature),
            summary: weather_json.currently.summary,
            currentIcon: iconLooper(iconCurrentlyOut),
            currentFeelLike: Math.round(weather_json.currently.apparentTemperature),
            currentHumidity: Math.round(100 * (weather_json.currently.humidity)),
            dailySummary: weather_json.daily.summary,
            todayHi: Math.round(weather_json.daily.data[0].temperatureMax),
            todayLo: Math.round(weather_json.daily.data[0].temperatureMin),
            todayIcon: iconLooper(iconTodayOut),
            // tomorrow
            dayTwo: daytwo.toUpperCase(),
            dayTwoHi: Math.round(weather_json.daily.data[1].temperatureMax),
            dayTwoLo: Math.round(weather_json.daily.data[1].temperatureMin),
            dayTwoIcon: iconLooper(iconTomorrowOut),
            // day three
            dayThree: daythree.toUpperCase(),
            dayThreeHi: Math.round(weather_json.daily.data[2].temperatureMax),
            dayThreeLo: Math.round(weather_json.daily.data[2].temperatureMin),
            dayThreeIcon: iconLooper(iconDay3Out),
            // day four
            dayFour: dayfour.toUpperCase(),
            dayFourHi: Math.round(weather_json.daily.data[3].temperatureMax),
            dayFourLo: Math.round(weather_json.daily.data[3].temperatureMin),
            dayFourIcon: iconLooper(iconDay4Out),
            // day five
            dayFive: dayfive.toUpperCase(),
            dayFiveHi: Math.round(weather_json.daily.data[4].temperatureMax),
            dayFiveLo: Math.round(weather_json.daily.data[4].temperatureMin),
            dayFiveIcon: iconLooper(iconDay5Out)
        }

        let weatherData = {
            weather: weather
        }

        res.render('index', weatherData)
    })

});

app.listen(8000);