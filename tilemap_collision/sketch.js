let tile = {
    w: 64,
    h: 64
  },
  tilemap = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  player = {
    p: null,
    state: 'idle',
    x: 64,
    y: 64,
    w: tile.w,
    h: tile.h,
    mapX: 1,
    mapY: 1
  };


setup = _ => {
  createCanvas(512, 512);
  player.p = new Player(player);
}

draw = _ => {
  background(220);

  generateTileMap();
  displayInfo();
  player.p.render();
}

const generateTileMap = () => {
  push();
  noStroke();
  for (let y = 0; y < tilemap.length; y++) {
    for (let x = 0; x < tilemap[y].length; x++) {

      switch (tilemap[y][x]) {
        case 0:
          fill('#030303');
          break;

        case 1:
          fill('#f8f8f8');
          break;
      }

      rect(x * tile.w, y * tile.h, tile.w, tile.h);
    }
  }
  pop();
}

const isPathTile = (tilemap, y, x) => {
  return (tilemap[y][x] === 1);
}

function keyPressed(e) {
  switch (e.code) {
    case 'ArrowUp':
    case 'KeyW':
      //console.log('key up');
      player.p.state = 'move-up';
      break;
    case 'ArrowDown':
    case 'KeyS':
      //console.log('key down');
      player.p.state = 'move-down';
      break;
    case 'ArrowLeft':
    case 'KeyA':
      //console.log('key left');
      player.p.state = 'move-left';
      break;
    case 'ArrowRight':
    case 'KeyD':
      //console.log('key right');
      player.p.state = 'move-right';
      break;
  }
}

function keyReleased() {
  player.p.state = 'idle';
}

const displayInfo = _ => {
  textAlign(CENTER);
  textFont('Avenir');
  textSize(33);
  push();
  noStroke();
  fill(220);
  text('move player with WASD', width * 0.5, height * 0.08);
  pop();
}