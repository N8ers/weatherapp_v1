// const express = require('express');
// const request = require('request');

// let app = express();

// app.set('view engine', 'ejs');

// let sush = 'e20fe780791cad1d4d4d7b8484f970a5';
// let lat = 39.892692;
// let lng = -86.290568;
// let apiUrl = `https://api.darksky.net/forecast/${sush}/${lat},${lng}`;

// app.get('/', function(req, res){
//     request(apiUrl, function(error, response, body))
// });

// app.listen(4500);

// // const getWeather = (what, callback) => {
    
//     request({ url: apiUrl, json: true }, (error, response) => {
//         if (error){
//             callback('unable to connect to server')
//         } else {
//             callback(undefined, {
//                 currentTemp: response.body.currently.temperature,
//                 currentSummary: response.body.currently.summary,
//                 currentIcon: response.body.currently.icon,
//                 currentFeelLike: response.body.currently.apparentTemperature,
//                 currentHumidity: response.body.currently.humidity
//                 //feel like & humidity
//             })
//             console.log(currentTemp)
//         }
//     })
// }

// module.exports = getWeather