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
        weather_json = JSON.parse(body);

        let dataDayThree = weather_json.daily.data[2].time;
        console.log(dataDayThree)
        let dataDayFour = weather_json.daily.data[3].time;
        console.log(dataDayFour)
        let dataDayFive = weather_json.daily.data[4].time
        console.log(dataDayFive)

        let daytwo = moment.unix(weather_json.daily.data[1].time).format("dddd")
        let daythree = moment.unix(dataDayThree).format("dddd")
        let dayfour = moment.unix(dataDayFour).format("dddd")
        let dayfive = moment.unix(dataDayFive).format("dddd")

        console.log(daythree)
        console.log(dayfour)
        console.log(dayfive)

        // make variables of each 'icon'
        let iconCurrentlyOut = weather_json.currently.icon;
        let iconTodayOut = weather_json.daily.data[0].icon;
        let iconTomorrowOut = weather_json.daily.data[1].icon;
        let iconDay3Out = weather_json.daily.data[2].icon;
        let iconDay4Out = weather_json.daily.data[3].icon;
        let iconDay5Out = weather_json.daily.data[4].icon;
        // run icon through if statement
        switch (iconCurrentlyOut) {
            case 'rain':
                console.log('it is rainy')
                iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--lV_oG1pX--/v1515194565/rainy-6_pzlrlc.svg";
                break;
            case 'snow':
                console.log('it is snowy')
                iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--EsqjgOhi--/v1515194606/snowy-6_zl9kwx.svg";
                break;
            case 'clear-day':
                console.log('it is clear-day')
                iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s---6vDoixr--/v1515194528/day_shry4k.svg";
                break;
            case 'clear-night':
                console.log('it is clear-night')
                iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--CxSp0zXi--/v1515194530/night_quuh8p.svg";
                break;
            case 'sleet':
                console.log('it is sleet')
                iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--yeTLFcMd--/v1515194570/rainy-7_sdbkyl.svg";
                break;
            case 'wind':
                console.log('it is wind')
                console.log('i have no icon')
                iconCurrently = ""
                break;
            case 'fog':
                console.log('it is fog')
                console.log('i have no icon')
                iconCurrently = ""
                break;
            case 'cloudy':
                console.log('it is cloudy')
                iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg";
                break;
            case 'partly-cloudy-day':
                console.log('it is partly-cloudy-day')
                iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--pkzBuC_i--/v1515194500/cloudy-day-1_n3vykl.svg";
                break;
            case 'snow':
                console.log('it is partly-cloudy-night')
                iconCurrently = "https://res.cloudinary.com/raphaeladdile/image/upload/s--DdrT7Iph--/v1515194500/cloudy-night-1_ro8fb5.svg";
                break;
            default:
                console.log('i dont know whats goin on')
        }

        switch (iconTodayOut) {
            case 'rain':
                console.log('it is rainy')
                iconToday = "https://res.cloudinary.com/raphaeladdile/image/upload/s--lV_oG1pX--/v1515194565/rainy-6_pzlrlc.svg";
                break;
            case 'snow':
                console.log('it is snowy')
                iconToday = "https://res.cloudinary.com/raphaeladdile/image/upload/s--EsqjgOhi--/v1515194606/snowy-6_zl9kwx.svg";
                break;
            case 'clear-day':
                console.log('it is clear-day')
                iconToday = "https://res.cloudinary.com/raphaeladdile/image/upload/s---6vDoixr--/v1515194528/day_shry4k.svg";
                break;
            case 'clear-night':
                console.log('it is clear-night')
                iconToday = "https://res.cloudinary.com/raphaeladdile/image/upload/s--CxSp0zXi--/v1515194530/night_quuh8p.svg";
                break;
            case 'sleet':
                console.log('it is sleet')
                iconToday = "https://res.cloudinary.com/raphaeladdile/image/upload/s--yeTLFcMd--/v1515194570/rainy-7_sdbkyl.svg";
                break;
            case 'wind':
                console.log('it is wind')
                console.log('i have no icon')
                iconToday = ""
                break;
            case 'fog':
                console.log('it is fog')
                console.log('i have no icon')
                iconToday = ""
                break;
            case 'cloudy':
                console.log('it is cloudy')
                iconToday = "https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg";
                break;
            case 'partly-cloudy-day':
                console.log('it is partly-cloudy-day')
                iconToday = "https://res.cloudinary.com/raphaeladdile/image/upload/s--pkzBuC_i--/v1515194500/cloudy-day-1_n3vykl.svg";
                break;
            case 'snow':
                console.log('it is partly-cloudy-night')
                iconToday = "https://res.cloudinary.com/raphaeladdile/image/upload/s--DdrT7Iph--/v1515194500/cloudy-night-1_ro8fb5.svg";
                break;
            default:
                console.log('i dont know whats goin on')
        }

        switch (iconTomorrowOut) {
            case 'rain':
                console.log('it is rainy')
                iconTomorrow = "https://res.cloudinary.com/raphaeladdile/image/upload/s--lV_oG1pX--/v1515194565/rainy-6_pzlrlc.svg";
                break;
            case 'snow':
                console.log('it is snowy')
                iconTomorrow = "https://res.cloudinary.com/raphaeladdile/image/upload/s--EsqjgOhi--/v1515194606/snowy-6_zl9kwx.svg";
                break;
            case 'clear-day':
                console.log('it is clear-day')
                iconTomorrow = "https://res.cloudinary.com/raphaeladdile/image/upload/s---6vDoixr--/v1515194528/day_shry4k.svg";
                break;
            case 'clear-night':
                console.log('it is clear-night')
                iconTomorrow = "https://res.cloudinary.com/raphaeladdile/image/upload/s--CxSp0zXi--/v1515194530/night_quuh8p.svg";
                break;
            case 'sleet':
                console.log('it is sleet')
                iconTomorrow = "https://res.cloudinary.com/raphaeladdile/image/upload/s--yeTLFcMd--/v1515194570/rainy-7_sdbkyl.svg";
                break;
            case 'wind':
                console.log('it is wind')
                console.log('i have no icon')
                iconTomorrow = ""
                break;
            case 'fog':
                console.log('it is fog')
                console.log('i have no icon')
                iconTomorrow = ""
                break;
            case 'cloudy':
                console.log('it is cloudy')
                iconTomorrow = "https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg";
                break;
            case 'partly-cloudy-day':
                console.log('it is partly-cloudy-day')
                iconTomorrow = "https://res.cloudinary.com/raphaeladdile/image/upload/s--pkzBuC_i--/v1515194500/cloudy-day-1_n3vykl.svg";
                break;
            case 'snow':
                console.log('it is partly-cloudy-night')
                iconTomorrow = "https://res.cloudinary.com/raphaeladdile/image/upload/s--DdrT7Iph--/v1515194500/cloudy-night-1_ro8fb5.svg";
                break;
            default:
                console.log('i dont know whats goin on')
        }

        switch (iconDay3Out) {
            case 'rain':
                console.log('it is rainy')
                iconDayThree = "https://res.cloudinary.com/raphaeladdile/image/upload/s--lV_oG1pX--/v1515194565/rainy-6_pzlrlc.svg";
                break;
            case 'snow':
                console.log('it is snowy')
                iconDayThree = "https://res.cloudinary.com/raphaeladdile/image/upload/s--EsqjgOhi--/v1515194606/snowy-6_zl9kwx.svg";
                break;
            case 'clear-day':
                console.log('it is clear-day')
                iconDayThree = "https://res.cloudinary.com/raphaeladdile/image/upload/s---6vDoixr--/v1515194528/day_shry4k.svg";
                break;
            case 'clear-night':
                console.log('it is clear-night')
                iconDayThree = "https://res.cloudinary.com/raphaeladdile/image/upload/s--CxSp0zXi--/v1515194530/night_quuh8p.svg";
                break;
            case 'sleet':
                console.log('it is sleet')
                iconDayThree = "https://res.cloudinary.com/raphaeladdile/image/upload/s--yeTLFcMd--/v1515194570/rainy-7_sdbkyl.svg";
                break;
            case 'wind':
                console.log('it is wind')
                console.log('i have no icon')
                iconDayThree = ""
                break;
            case 'fog':
                console.log('it is fog')
                console.log('i have no icon')
                iconDayThree = ""
                break;
            case 'cloudy':
                console.log('it is cloudy')
                iconDayThree = "https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg";
                break;
            case 'partly-cloudy-day':
                console.log('it is partly-cloudy-day')
                iconDayThree = "https://res.cloudinary.com/raphaeladdile/image/upload/s--pkzBuC_i--/v1515194500/cloudy-day-1_n3vykl.svg";
                break;
            case 'snow':
                console.log('it is partly-cloudy-night')
                iconDayThree = "https://res.cloudinary.com/raphaeladdile/image/upload/s--DdrT7Iph--/v1515194500/cloudy-night-1_ro8fb5.svg";
                break;
            default:
                console.log('i dont know whats goin on')
        }

        switch (iconDay4Out) {
            case 'rain':
                console.log('it is rainy')
                iconDayFour = "https://res.cloudinary.com/raphaeladdile/image/upload/s--lV_oG1pX--/v1515194565/rainy-6_pzlrlc.svg";
                break;
            case 'snow':
                console.log('it is snowy')
                iconDayFour = "https://res.cloudinary.com/raphaeladdile/image/upload/s--EsqjgOhi--/v1515194606/snowy-6_zl9kwx.svg";
                break;
            case 'clear-day':
                console.log('it is clear-day')
                iconDayFour = "https://res.cloudinary.com/raphaeladdile/image/upload/s---6vDoixr--/v1515194528/day_shry4k.svg";
                break;
            case 'clear-night':
                console.log('it is clear-night')
                iconDayFour = "https://res.cloudinary.com/raphaeladdile/image/upload/s--CxSp0zXi--/v1515194530/night_quuh8p.svg";
                break;
            case 'sleet':
                console.log('it is sleet')
                iconDayFour = "https://res.cloudinary.com/raphaeladdile/image/upload/s--yeTLFcMd--/v1515194570/rainy-7_sdbkyl.svg";
                break;
            case 'wind':
                console.log('it is wind')
                console.log('i have no icon')
                iconDayFour = ""
                break;
            case 'fog':
                console.log('it is fog')
                console.log('i have no icon')
                iconDayFour = ""
                break;
            case 'cloudy':
                console.log('it is cloudy')
                iconDayFour = "https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg";
                break;
            case 'partly-cloudy-day':
                console.log('it is partly-cloudy-day')
                iconDayFour = "https://res.cloudinary.com/raphaeladdile/image/upload/s--pkzBuC_i--/v1515194500/cloudy-day-1_n3vykl.svg";
                break;
            case 'snow':
                console.log('it is partly-cloudy-night')
                iconDayFour = "https://res.cloudinary.com/raphaeladdile/image/upload/s--DdrT7Iph--/v1515194500/cloudy-night-1_ro8fb5.svg";
                break;
            default:
                console.log('i dont know whats goin on')
        }

        switch (iconDay5Out) {
            case 'rain':
                console.log('it is rainy')
                iconDayFive = "https://res.cloudinary.com/raphaeladdile/image/upload/s--lV_oG1pX--/v1515194565/rainy-6_pzlrlc.svg";
                break;
            case 'snow':
                console.log('it is snowy')
                iconDayFive = "https://res.cloudinary.com/raphaeladdile/image/upload/s--EsqjgOhi--/v1515194606/snowy-6_zl9kwx.svg";
                break;
            case 'clear-day':
                console.log('it is clear-day')
                iconDayFive = "https://res.cloudinary.com/raphaeladdile/image/upload/s---6vDoixr--/v1515194528/day_shry4k.svg";
                break;
            case 'clear-night':
                console.log('it is clear-night')
                iconDayFive = "https://res.cloudinary.com/raphaeladdile/image/upload/s--CxSp0zXi--/v1515194530/night_quuh8p.svg";
                break;
            case 'sleet':
                console.log('it is sleet')
                iconDayFive = "https://res.cloudinary.com/raphaeladdile/image/upload/s--yeTLFcMd--/v1515194570/rainy-7_sdbkyl.svg";
                break;
            case 'wind':
                console.log('it is wind')
                console.log('i have no icon')
                iconDayFive = ""
                break;
            case 'fog':
                console.log('it is fog')
                console.log('i have no icon')
                iconDayFive = ""
                break;
            case 'cloudy':
                console.log('it is cloudy')
                iconDayFive = "https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg";
                break;
            case 'partly-cloudy-day':
                console.log('it is partly-cloudy-day')
                iconDayFive = "https://res.cloudinary.com/raphaeladdile/image/upload/s--pkzBuC_i--/v1515194500/cloudy-day-1_n3vykl.svg";
                break;
            case 'snow':
                console.log('it is partly-cloudy-night')
                iconDayFive = "https://res.cloudinary.com/raphaeladdile/image/upload/s--DdrT7Iph--/v1515194500/cloudy-night-1_ro8fb5.svg";
                break;
            default:
                console.log('i dont know whats goin on')
        }

        let weather = {
            // current
            // currentIcon: weather_json.currently.icon,
            // today 
            currentTemp: Math.round(weather_json.currently.temperature),
            summary: weather_json.currently.summary,
            currentIcon: iconCurrently,
            currentFeelLike: Math.round(weather_json.currently.apparentTemperature),
            currentHumidity: 100 * (weather_json.currently.humidity),
            dailySummary: weather_json.daily.summary,
            todayHi: Math.round(weather_json.daily.data[0].temperatureMax),
            todayLo: Math.round(weather_json.daily.data[0].temperatureMin),
            todayIcon: iconToday,
            // tomorrow
            dayTwo: daytwo,
            dayTwoHi: Math.round(weather_json.daily.data[1].temperatureMax),
            dayTwoLo: Math.round(weather_json.daily.data[1].temperatureMin),
            dayTwoIcon: iconTomorrow,
            // day three
            dayThree: daythree,
            dayThreeHi: Math.round(weather_json.daily.data[2].temperatureMax),
            dayThreeLo: Math.round(weather_json.daily.data[2].temperatureMin),
            dayThreeIcon: iconDayThree,
            // day four
            dayFour: dayfour,
            dayFourHi: Math.round(weather_json.daily.data[3].temperatureMax),
            dayFourLo: Math.round(weather_json.daily.data[3].temperatureMin),
            dayFourIcon: iconDayFour,
            // day five
            dayFive: dayfive,
            dayFiveHi: Math.round(weather_json.daily.data[4].temperatureMax),
            dayFiveLo: Math.round(weather_json.daily.data[4].temperatureMin),
            dayFiveIcon: iconDayFive
        }
        console.log(weather.dayThree)
        console.log(weather.dayFour)
        console.log(weather.dayFive)

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

        let weatherData = {
            weather: weather
        }
        // let forecastData = {forecast: forecast}
        // let iconSelector = {icons: icons}

        res.render('index', weatherData)
    })

});

app.listen(8000);