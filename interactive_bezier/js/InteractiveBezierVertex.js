class InteractiveBezierVertex {
	constructor() {
		this.isFilled = false;
	}

	bezCurveAnchorLine() {
		this.anchorPoint_1 = createVector(bVDragPoint[0].pos.x, bVDragPoint[0].pos.y);
		this.controlPoint_1 = createVector(bVDragPoint[1].pos.x, bVDragPoint[1].pos.y);
		this.controlPoint_2 = createVector(bVDragPoint[2].pos.x, bVDragPoint[2].pos.y);
		this.anchorPoint_2 = createVector(bVDragPoint[3].pos.x, bVDragPoint[3].pos.y);

		push();
		strokeWeight(0.5);
		line(bVDragPoint[0].pos.x, bVDragPoint[0].pos.y, bVDragPoint[1].pos.x, bVDragPoint[1].pos.y);
		line(bVDragPoint[2].pos.x, bVDragPoint[2].pos.y, bVDragPoint[3].pos.x, bVDragPoint[3].pos.y);
		pop();

		return this;
	}

	bezCurveLine() {
		push();
		noFill();
		stroke(217);
		beginShape();
		vertex(this.anchorPoint_1.x, this.anchorPoint_1.y);
		bezierVertex(this.controlPoint_1.x, this.controlPoint_1.y,
			this.controlPoint_2.x, this.controlPoint_2.y,
			this.anchorPoint_2.x, this.anchorPoint_2.y);
		endShape();
		pop();
		return this;
	}

	render() {
		return this.bezCurveAnchorLine().bezCurveLine();
	}
}