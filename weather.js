const request = require('request');

let sush = 'e20fe780791cad1d4d4d7b8484f970a5';
let lat = 39.892692;
let lng = -86.290568;
let apiUrl = `https://api.darksky.net/forecast/${sush}/${lat},${lng}`;

const getWeather = (what, callback) => {
    
    request({ url: apiUrl, json: true }, (error, response) => {
        if (error){
            callback('unable to connect to server')
        } else {
            callback(undefined, {
                currentTemp: response.body.currently.temperature,
                currentSummary: response.body.currently.summary,
                currentIcon: response.body.currently.icon,
                currentFeelLike: response.body.currently.apparentTemperature,
                currentHumidity: response.body.currently.humidity
                //feel like & humidity
            })
            console.log(currentTemp)
        }
    })
}

module.exports = getWeather