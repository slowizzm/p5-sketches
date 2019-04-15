class Rainbow {
	constructor() {
		this.pos = createVector();
		this.col = 217;
	}

	display() {
		
			push();
			stroke(skittles[0].sc);
			strokeWeight((redSkittles*redSkittles)/totalSkittles);
			noFill();
			scale(2);
			translate(width*0.3,height*0.5);
			arc(0, 0, 80, 80, PI, 0, OPEN);
			pop();
			
			push();
			stroke(skittles[1].sc);
			strokeWeight((orangeSkittles*orangeSkittles)/totalSkittles);
			noFill();
			scale(2);
			translate(width*0.3,height*0.5);
			arc(0, 0, 75, 75, PI, 0, OPEN);
			pop();
		
		push();
			stroke(skittles[2].sc);
			strokeWeight((yellowSkittles*yellowSkittles)/totalSkittles);
			noFill();
			scale(2);
			translate(width*0.3,height*0.5);
			arc(0, 0, 70, 70, PI, 0, OPEN);
			pop();
		
		push();
			stroke(skittles[3].sc);
			strokeWeight((greenSkittles*greenSkittles)/totalSkittles);
			noFill();
			scale(2);
			translate(width*0.3,height*0.5);
			arc(0, 0, 65, 65, PI, 0, OPEN);
			pop();
		
		push();
			stroke(skittles[4].sc);
			strokeWeight((blueSkittles*blueSkittles)/totalSkittles);
			noFill();
			scale(2);
			translate(width*0.3,height*0.5);
			arc(0, 0, 60, 60, PI, 0, OPEN);
			pop();
		
		push();
			stroke(skittles[5].sc);
			strokeWeight((purpleSkittles*purpleSkittles)/totalSkittles);
			noFill();
			scale(2);
			translate(width*0.3,height*0.5);
			arc(0, 0, 55, 55, PI, 0, OPEN);
			pop();
    
	}

	run() {
		this.display();
	}
}