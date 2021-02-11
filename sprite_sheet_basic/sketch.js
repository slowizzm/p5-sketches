const weapons = [];

let spriteSheet,
  spriteData,
  url = 'https://dl.dropboxusercontent.com/s/tpuz6tjx7rwmcqj/complete_width448.png?dl=0';

function preload() {
  spriteSheet = loadImage(url);
  spriteData = loadJSON('weapons.json');
}

function setup() {
  createCanvas(256, 64);

  // get and store sprites from sprite sheet
  let frames = spriteData.frames;
  for (let i = 0; i < frames.length; i++) {
    let data = frames[i].position;
    weapons[i] = spriteSheet.get(data.x, data.y, data.w, data.h);
    weapons[i].resize(weapons[i].width * 2, weapons[i].height * 2);
  }

  weapons.forEach((weapon, idx) => {
    image(weapon, idx * weapon.width, 0);
  })

}