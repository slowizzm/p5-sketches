var Joint = function (id, joint) {
	// create joint id and position data
  	this.id = id;
  	this.pos = createVector(joint.cameraX, joint.cameraY, joint.cameraZ);

  	this.update = function (joint) {
    	this.pos = createVector(joint.cameraX, joint.cameraY, joint.cameraZ);
  	}
}