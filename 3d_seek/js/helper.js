function drawBox() {
	// DRAW OUTLINE BOX
	stroke(50);
	//front
	line(-boxSz, -boxSz, boxSz, boxSz, -boxSz, boxSz);
	line(-boxSz, boxSz, boxSz, boxSz, boxSz, boxSz);
	line(-boxSz, -boxSz, boxSz, -boxSz, boxSz, boxSz);
	line(boxSz, -boxSz, boxSz, boxSz, boxSz, boxSz);

	//back
	line(-boxSz, -boxSz, -boxSz, boxSz, -boxSz, -boxSz);
	line(-boxSz, boxSz, -boxSz, boxSz, boxSz, -boxSz);
	line(-boxSz, -boxSz, -boxSz, -boxSz, boxSz, -boxSz);
	line(boxSz, -boxSz, -boxSz, boxSz, boxSz, -boxSz);

	//left top
	line(-boxSz, -boxSz, boxSz, -boxSz, -boxSz, -boxSz);
	//left bottom
	line(-boxSz, boxSz, -boxSz, -boxSz, boxSz, boxSz);
	//right top
	line(boxSz, -boxSz, boxSz, boxSz, -boxSz, -boxSz);
	// // right bottom
	line(boxSz, boxSz, -boxSz, boxSz, boxSz, boxSz);

}