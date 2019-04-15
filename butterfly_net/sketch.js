let tiles = [], att;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	for (let x = 0; x < width; x+=33) {
		for (let y = 0; y < height; y+=33) {
			let t = new Tiles(x,y,0);
			tiles.push(t);
		}
	}
	
	att = new Attractor(3);
}

function draw() {
  background(217);
	
	att.render();
	
	for (let i = 0; i < tiles.length; i++) {
		tiles[i].render();
	}
}