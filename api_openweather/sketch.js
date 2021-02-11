//https://openweathermap.org/

const api = 'https://api.openweathermap.org/data/2.5/weather',
  cities = [4409896, 4405434], //city id - springfield | republic
  api_key = 'c77b6a472177908249e80b1c6d79abf8',
  units = 'imperial'; //standard (kelvin) | metric (celcius) | imperial (fahrenheit)

const url = `${api}?id=${cities[0]}&units=${units}&appid=${api_key}`;

let weather;

function setup() {
  createCanvas(200, 600);
  colorMode(HSL, 360, 1, 1, 1);
  fetchData();
}

const fetchData = _ => {
  loadJSON(url, gotData);
}

const gotData = data => {
  weather = data;
  // console.log(weather)
}

function draw() {
  background(20, 0.1, 0.1, 1);
  if (weather) thermometer();
}