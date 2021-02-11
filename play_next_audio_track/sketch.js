const sng_src = ['https://ia800702.us.archive.org/6/items/cd_tee-vee-toons-the-commercials_various-artists-ajax-cleanser-ajax-laundry/disc1/01.%20Kellogg%27s%20Rice%20Krispies%20-%20Snap%2C%20Crackle%2C%20Pop%20%5BKellogg%27s%20Rice%20Krispies%5D_sample.mp3',
    'https://ia800702.us.archive.org/6/items/cd_tee-vee-toons-the-commercials_various-artists-ajax-cleanser-ajax-laundry/disc1/02.%20Chiquita%20Bananas%20-%20I%27m%20A%20Chiquita%20Banana_sample.mp3',
    'https://ia800702.us.archive.org/6/items/cd_tee-vee-toons-the-commercials_various-artists-ajax-cleanser-ajax-laundry/disc1/03.%20Good%20%26%20Plenty%20-%20Choo%20Choo%20Charlie_sample.mp3',
    'https://ia600702.us.archive.org/6/items/cd_tee-vee-toons-the-commercials_various-artists-ajax-cleanser-ajax-laundry/disc1/04.%20Marshmallow%20Fluff%20-%20If%20You%20Like%20Fluff%2C%20Fluff%2C%20Fluff%20%5BFluffernutter%20OR%20Marshmallow%20Fluff%5D_sample.mp3',
    'https://ia600702.us.archive.org/6/items/cd_tee-vee-toons-the-commercials_various-artists-ajax-cleanser-ajax-laundry/disc1/05.%20Mounds%20And%20Almond%20Joy%20Candy%20Bars%20-%20Sometimes%20You%20Feel%20Like%20A%20Nut_sample.mp3',
    'https://ia800702.us.archive.org/6/items/cd_tee-vee-toons-the-commercials_various-artists-ajax-cleanser-ajax-laundry/disc1/06.%20Hershey%27s%20Chocolate%20Bars%20-%20There%27s%20Nothing%20Like%20The%20Face_sample.mp3',
    'https://ia800702.us.archive.org/6/items/cd_tee-vee-toons-the-commercials_various-artists-ajax-cleanser-ajax-laundry/disc1/07.%20Oreo%20Chocolate%20Sandwich%20Cookies%20-%20Do%20You%20Know%20Exactly%20How_sample.mp3',
    'https://ia800702.us.archive.org/6/items/cd_tee-vee-toons-the-commercials_various-artists-ajax-cleanser-ajax-laundry/disc1/08.%20Cracker%20Jack%20-%20Candy-Coated%20Popcorn%2C%20Peanuts%20and%20a%20Prize%20%5BCrackerjack%5D_sample.mp3',
    'https://ia600702.us.archive.org/6/items/cd_tee-vee-toons-the-commercials_various-artists-ajax-cleanser-ajax-laundry/disc1/09.%20Coca-Cola%20-%20I%27d%20Like%20To%20Buy%20The%20World%20A%20Coke_sample.mp3'
  ],
  sng_names = ['snap, crackle, pop', 'chiquita banana', 'choo choo charlie', 'fluffernutter marshmallow', 'mounds & almond nut', 'hershey', 'oreo', 'cracker jacks', "coke"],
  NUM_SNGS = sng_src.length,
  sngs = [];

let idx = 0,
  canReset = true,
  s_canPlay = 'click to play';

function preload() {
  for (let i = 0; i < NUM_SNGS; i++) {
    sngs[i] = loadSound(sng_src[i]);
  }
}

function setup() {
  createCanvas(400, 400);
  textSize(30);
  textAlign(CENTER);
}

function draw() {
  background(220);

  checkForLastIndex();

  (canReset) ? text(s_canPlay, width * 0.5, height * 0.5): text(sng_names[idx], width * 0.5, height * 0.5)

  onReset();
}

const checkForLastIndex = _ => {
  if (idx === NUM_SNGS) {
    sngs.forEach(sng => {
      sng.onended(_ => {});
    });
    canReset = true;
    s_canPlay = 'click to play again';
    idx = 0;
  }
}

const onReset = _ => {
  if (canReset && mouseIsPressed) {
    sngs.forEach(sng => {
      sng.onended(_ => {
        playNextAudioTrack.call(this, ++idx);
      });
    });
    sngs[idx].play();
    canReset = false;
    initState = false;
  }
}

const playNextAudioTrack = i => {
  if (i < NUM_SNGS) sngs[i].play();
}