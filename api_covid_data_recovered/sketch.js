// https://covidtracking.com/

let covidData;
const url = 'https://api.covidtracking.com/v1/us/current.json';


function setup() {
  createCanvas(600, 200);
  textAlign(CENTER, CENTER);
  textSize(33);
  noStroke();
  fill(13, 17, 21);

  fetchData();

}

function fetchData() {
  loadJSON(url, gotData);
}

function gotData(data) {
  covidData = data;
  console.log(covidData);
  fetchUpdatedData();
}

function draw() {
  background('#f8f8f8');
  if (covidData) {
    text(Object.keys(covidData[0])[11], width * 0.5, height * 0.35);
    text(covidData[0].recovered, width * 0.5, height * 0.55);
  }
}

function fetchUpdatedData() {
  let now = new Date();
  let millisTillUpdate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 01, 0, 0) - now;
  if (millisTillUpdate < 0) {
    millisTillUpdate += 86400000; // it's after 12:01am, try 12:01am tomorrow.
  }
  setTimeout(fetchData, millisTillUpdate);
}