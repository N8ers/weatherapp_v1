const request = require('request');

let sush = 'e20fe780791cad1d4d4d7b8484f970a5';
let lat = 39.892692;
let lng = -86.290568;
let apiUrl = `https://api.darksky.net/forecast/${sush}/${lat},${lng}`;

request({ url: apiUrl, json: true }, (error, response) => {
    console.log(response.body.currently)
})