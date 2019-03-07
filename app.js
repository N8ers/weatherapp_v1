const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('main.ejs');
})

const weather = require('./weather.js');

weather.getWeather('12what', (error, data) => {
    //console.log(data)
    console.log(data.currentTemp)
    console.log(data.currentSummary)
    console.log(data.currentIcon)
    console.log(data.currentFeelLike)
    console.log(data.currentHumidity)

})