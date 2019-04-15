function connectMesh() {
	push();
	translate(offset.x, offset.y);

	for (let i = 0; i < eMesh.length; i++) {
		if (i < eMesh.length - 1) {
			if (i % count.x < 19) {
				stroke(255, 28);
				eMesh[i].run();
				stroke(255, 32);
			}

			if (i < eMesh.length - count.x) {
				stroke(255, 28);
				stroke(255, 32);
			}
		}
	}
	pop();
}