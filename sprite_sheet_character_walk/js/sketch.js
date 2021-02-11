// sprite image created by Sithjester

let spriteSheet,
  spriteData,
  player;

function preload() {
  spriteSheet = loadImage('img/deadpool-sprite.png');
  spriteData = loadJSON('json/deadpool.json');
}

function setup() {
  createCanvas(500, 500);
  player = new Player(createVector(width * 0.5, height * 0.5), 'bounds'); //'bounds' || 'wrap'

  imageMode(CENTER);
  frameRate(12);
}

function draw() {
  clear();
  player.render();
}

function keyPressed(e) {
  switch (e.code) {
    case 'ArrowUp':
    case 'KeyW':
      //console.log('key up');
      player.state = 'move-up';
      player.idx = 12;
      break;
    case 'ArrowDown':
    case 'KeyS':
      //console.log('key down');
      player.state = 'move-down';
      player.idx = 0;
      break;
    case 'ArrowLeft':
    case 'KeyA':
      //console.log('key left');
      player.state = 'move-left';
      player.idx = 4;
      break;
    case 'ArrowRight':
    case 'KeyD':
      //console.log('key right');
      player.state = 'move-right';
      player.idx = 8;
      break;
  }
}

function keyReleased() {
  player.state = 'idle';
}