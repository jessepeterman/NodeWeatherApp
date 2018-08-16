const fs = require('fs');
const fetch = require('node-fetch');
const config = require('./config.js');


let zipCode = process.argv[2];
let weatherObject = {};
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${zipCode},us&units=imperial&appid=${config.MY_KEY}`)
  .then(response => {
    return response.json();
  })
  .then(res => {
    weatherObject = res;
    showWeather();
  });

const showWeather = () => {
  console.log(`The weather in ${weatherObject.name} today is: ${weatherObject.main.temp} degrees.`);
};
