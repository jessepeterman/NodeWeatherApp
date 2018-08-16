const fs = require('fs');
const fetch = require('node-fetch');
const config = require('./config.js');

let contentLoaded = false;

let zipCode = process.argv[2];
let weatherObject = {};
fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${zipCode},us&units=imperial&appid=${config.MY_KEY}`)
  .then(response => {
    return response.json();
  })
  .then(res => {
    weatherObject = res;
    // console.log(`Today's weather for ${res.name} is: ${res.main.temp}.`);
    contentLoaded = true;
    showWeather();
  });

  const showWeather = () => {
    console.log(`The weather in ${weatherObject.city.name} today is: ${weatherObject.list[0].main.temp} degrees.`);
  };
// let fileBuffer = fs.readFileSync(`${file}`);
// let fileString = fileBuffer.toString();
// let newlinesArray = fileString.split('\n');
// let numOfLines = newlinesArray.length-1;
// console.log(numOfLines);



