class InteractiveBezier {
	constructor() {
		this.isFilled = false;
	}

	bezCurveAnchorLine() {
		this.anchorPoint_1 = createVector(bezierDragPoint[0].pos.x, bezierDragPoint[0].pos.y);
		this.controlPoint_1 = createVector(bezierDragPoint[1].pos.x, bezierDragPoint[1].pos.y);
		this.controlPoint_2 = createVector(bezierDragPoint[2].pos.x, bezierDragPoint[2].pos.y);
		this.anchorPoint_2 = createVector(bezierDragPoint[3].pos.x, bezierDragPoint[3].pos.y);

		push();
		strokeWeight(0.5);
		line(bezierDragPoint[0].pos.x, bezierDragPoint[0].pos.y, bezierDragPoint[1].pos.x, bezierDragPoint[1].pos.y);
		line(bezierDragPoint[2].pos.x, bezierDragPoint[2].pos.y, bezierDragPoint[3].pos.x, bezierDragPoint[3].pos.y);
		pop();

		return this;
	}

	bezCurveLine() {
		push();
		noFill();
		stroke(217);
		bezier(this.anchorPoint_1.x, this.anchorPoint_1.y,
			this.controlPoint_1.x, this.controlPoint_1.y,
			this.controlPoint_2.x, this.controlPoint_2.y,
			this.anchorPoint_2.x, this.anchorPoint_2.y);
		pop();
		return this;
	}

	render() {
		return this.bezCurveAnchorLine().bezCurveLine();
	}
}