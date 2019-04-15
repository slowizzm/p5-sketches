/*
Springfield Flag - wip
all hardcoded atm ... need to fix, works for now.

Visit http://sgfflag.org/ now to support the movement ...
*/

let flag;

function setup() {
	createCanvas(window.innerWidth - 4, window.innerHeight - 4);
	flag = new Flag();
}

function draw() {
	background(51);
	flag.display();
}
 
class Flag {
	constructor() {
		this.pos = createVector();
	}

	banner() {
		//Blue background
		push();
		rectMode(CENTER);
		fill('#6E9ECB');
		noStroke();
		rect(360, 365, 600, 333);
		pop();

		/*
		White Stripe: Representing both the Ozark Plateua 
		on which our city rests, and Routes 66 - 
		The Mother Road of America, 
		founded right here in Springfield.
		*/
		push();
		rectMode(CENTER);
		fill(217);
		noStroke();
		rect(360, 418, 600, 85);
		pop();
	}

	emblem() {
		/*
		Compass Rose / Crown: The "Compas Crown" elegantly
		combines two core elements of our identity as
		a city. The Compass Rose represents our role as a
		crossroads to the nation. The crown pays
		homage to our moniker of nearly 150 years:
		"Queen City of The Ozarks".
		*/
		//compass rose
		push();
		fill('#1D3554')
		beginShape();
		vertex(360, 275);
		vertex(380, 340);
		vertex(420, 320);
		vertex(400, 360);
		vertex(465, 375);
		vertex(400, 400);
		vertex(420, 435);
		vertex(380, 420);
		vertex(360, 485);
		vertex(340, 420);
		vertex(300, 435);
		vertex(325, 400);
		vertex(255, 375);
		vertex(320, 360);
		vertex(300, 320);
		vertex(340, 340);
		vertex(360, 275);
		endShape(CLOSE);
		pop();

		//crown
		push();
		scale(0.8);
		translate(90, 96);
		fill(217)
		beginShape();
		vertex(360, 275);
		vertex(380, 340);
		vertex(420, 320);
		vertex(400, 360);
		bezierVertex(403, 360, 360, 370, 320, 360);
		vertex(320, 360);
		vertex(300, 320);
		vertex(340, 340);
		vertex(360, 275);
		endShape(CLOSE);
		pop();

		/*
		3 Stars: Innovative Spirit, Connection with Nature,
		and Ozarks Culture.
		*/

		push();
		fill(217);
		noStroke();
		beginShape();
		vertex(265, 280);
		vertex(277, 287);
		vertex(288, 280);
		vertex(283, 290);
		vertex(290, 305);
		vertex(275, 300);
		vertex(265, 305);
		vertex(270, 293);
		vertex(265, 280);
		endShape(CLOSE);
		pop();

		push();
		translate(720, 585);
		rotate(radians(180));
		fill(217);
		noStroke();
		beginShape();
		vertex(265, 280);
		vertex(277, 287);
		vertex(288, 280);
		vertex(283, 290);
		vertex(290, 305);
		vertex(275, 300);
		vertex(265, 305);
		vertex(270, 293);
		vertex(265, 280);
		endShape(CLOSE);
		pop();

		push();
		fill(217);
		translate(762, 230);
		rotate(40);
		noStroke();
		beginShape();
		vertex(265, 280);
		vertex(277, 287);
		vertex(288, 280);
		vertex(283, 290);
		vertex(290, 305);
		vertex(275, 300);
		vertex(265, 305);
		vertex(270, 293);
		vertex(265, 280);
		endShape(CLOSE);
		pop();
	}

	display() {
		this.banner();
		this.emblem();
	}
}