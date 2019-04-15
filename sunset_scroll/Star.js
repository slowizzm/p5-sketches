let pg;

class Star {
	constructor(_x,_y,_s) {
		this.pos = createVector(_x,_y);
		this.s = _s;
		pg = createGraphics(window.innerWidth,window.innerHeight);
	}
	
	display(_p) {
		pg.push();
		pg.clear();
		pg.translate(0,_p);
		pg.noStroke();
		pg.fill(random(200,217));
		pg.ellipse(this.pos.x,this.pos.y, this.s);
		pg.pop();
		
		image(pg,0,0);
	}
	
	run(_p) {
		this.display(_p);
	}
}