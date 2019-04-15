//wip

let ib;
let bezierDragPoint = [];
let ibv;
let bVDragPoint = [];
let swapBez, BezVal;

let btn_fill, btn_stroke, slide_stroke;

function setup() {
	createCanvas(windowWidth, windowHeight);
	swapBez = createSelect();
	swapBez.option('Bezier');
	swapBez.option('BezierVertex');
	swapBez.position(20,20);

	ib = new InteractiveBezier();
	bezierDragPoint.push(new BezierDragPoint(462, 142));
	bezierDragPoint.push(new BezierDragPoint(210, 210));
	bezierDragPoint.push(new BezierDragPoint(658, 502));
	bezierDragPoint.push(new BezierDragPoint(355, 626));

	ibv = new InteractiveBezierVertex();
	//dragPoint.push(new DragPoint(100, 100));
	bVDragPoint.push(new BezierVertexDragPoint(237, 115));
	bVDragPoint.push(new BezierVertexDragPoint(100, 200));
	bVDragPoint.push(new BezierVertexDragPoint(293, 423));
	bVDragPoint.push(new BezierVertexDragPoint(140, 540));
}

function draw() {
	background(51);

	BezVal = swapBez.value();
	switch (BezVal) {
		case 'Bezier':

			ib.render();
			for (let i = 0; i < bezierDragPoint.length; i++) {
				bezierDragPoint[i].render();
			}

			push();
			noStroke();
			fill(217);
			textFont('Avenir');
			textAlign(CENTER, CENTER);
			textSize(23);
			text('bezier(' + floor(bezierDragPoint[0].pos.x) + ',' + floor(bezierDragPoint[0].pos.y) + ',' +
				floor(bezierDragPoint[1].pos.x) + ',' + floor(bezierDragPoint[1].pos.y) + ',' +
				floor(bezierDragPoint[2].pos.x) + ',' + floor(bezierDragPoint[2].pos.y) + ',' +
				floor(bezierDragPoint[3].pos.x) + ',' + floor(bezierDragPoint[3].pos.y) + ');', width * 0.5, height * 0.9);
			pop();

			break;

		case 'BezierVertex':

			ibv.render();
			for (let i = 0; i < bVDragPoint.length; i++) {
				bVDragPoint[i].render();
			}

			push();
			noStroke();
			fill(217);
			textFont('Avenir');
			textAlign(CENTER, CENTER);
			textSize(23);
			text('vertex(' + floor(bVDragPoint[0].pos.x) + ',' + floor(bVDragPoint[0].pos.y) + ')  bezierVertex(' +
				floor(bVDragPoint[1].pos.x) + ',' + floor(bVDragPoint[1].pos.y) + ',' +
				floor(bVDragPoint[2].pos.x) + ',' + floor(bVDragPoint[2].pos.y) + ',' +
				floor(bVDragPoint[3].pos.x) + ',' + floor(bVDragPoint[3].pos.y) + ');', width * 0.5, height * 0.9);
			pop();

			break;
	}
}

function mousePressed() {
	switch (BezVal) {
		case 'Bezier':
			for (let i = 0; i < bezierDragPoint.length; i++) {
				let d = dist(mouseX, mouseY, bezierDragPoint[i].pos.x, bezierDragPoint[i].pos.y);

				if (d < bezierDragPoint[i].r / 2) {
					bezierDragPoint[i].isDraggable = true;
				}
			}

			break;

		case 'BezierVertex':

			for (let i = 0; i < bVDragPoint.length; i++) {
				let d = dist(mouseX, mouseY, bVDragPoint[i].pos.x, bVDragPoint[i].pos.y);

				if (d < bVDragPoint[i].r / 2) {
					bVDragPoint[i].isDraggable = true;
				}
			}

			break;
	}
}

function mouseReleased() {
	switch (BezVal) {
		case 'Bezier':
			if (mouseX >= 4 && mouseX <= width - 4 && mouseY >= 4 && mouseY <= height - 4) {
				for (let i = 0; i < bezierDragPoint.length; i++) {
					bezierDragPoint[i].isDraggable = false;
				}
			}

			break;

		case 'BezierVertex':
			if (mouseX >= 4 && mouseX <= width - 4 && mouseY >= 4 && mouseY <= height - 4) {
				for (let i = 0; i < bVDragPoint.length; i++) {
					bVDragPoint[i].isDraggable = false;
				}
			}

			break;
	}
}