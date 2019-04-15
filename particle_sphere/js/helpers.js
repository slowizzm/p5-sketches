function updateSphere() {
	rotateY(13);
	countX = 0;
	xoff = 0.0;
	for (let i = 0; i < 360; i += inc) {
		countY = 0;
		yoff = 0.0;
		for (let j = 0; j < 360; j += inc) {
			amp = map(noise(xoff, yoff, zoff), 0, 1, width*0.3, width*0.4);
			pSphere[countX][countY].run(amp);
			countY += 1;
			yoff += 1;
		}
		countX += 1;
	}
	zoff += 0.00002;
}