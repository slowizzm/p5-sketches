const simpleObj = {
  number: 733
}

const objArray = [{
  x: 20
}]

const complexObj = {
  person: {
    name: 'first name',
    age: 33,
    pet: {
      type: 'dog',
      name: 'spot'
    }
  },
  dogbark: _ => {
    console.log('woof');
  }
}

let fruitData;
let charData;

const url = 'https://spreadsheets.google.com/feeds/cells/1b4Tet3U7DQByKfjOJ7TWYhWNfZbSyFB9OD2FAcD7pYU/1/public/full?alt=json';


let data;

function preload() {
  fruitData = loadJSON('fruits.json');
  charData = loadJSON('characters.json')
  // data = loadJSON(url)  
}

function setup() {

  //Javascript Objects
  // console.log(simpleObj)
  // console.log(complexObj)
  // complexObj.dogbark();

  //Array of objects
  // console.log(objArray)

  // Fruit JSON
  // console.log(fruitData);

  //Character JSON
  // console.log(charData.characters[1].main);
  charData.characters.forEach(character => {
    console.log(character.main)
  });

  //Google Sheets
  // console.log(data)
  // console.log(data.feed.entry[0].content);
  // console.log(data.feed.entry[0].content.$t);
  // console.log(data.feed.entry[1].content.$t);
}