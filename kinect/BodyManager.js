// object for managing bodies
var BodyManager = function() {
    var pop = 0; // population of zero
  	var bodies = {}; // bodies indexed by id

  	var removeDeadBodies = function() {
    	var timeStamp = Date.now();
    	for (var id in bodies) {
      		var body = bodies[id];
      		if (body.isDead()) {
        		delete bodies[id];
        		pop--;
      		}
    	}
  	}

	setInterval(removeDeadBodies, death);

	// check to see if body already exists
  	this.contains = function(id) {
    	return id in bodies;
  	}
  
  	// add new body
	this.add = function(body) {
    	var id = body.trackingId;
    	bodies[id] = new Body(body);
    	pop++;
  	}
    
  	// update data for existing body
  	this.update = function(body) {
    	var id = body.trackingId;
    	bodies[id].update(body);
  	}

  	// return array of body objects
  	this.getBodies = function() {
    	var arrayOfBodies = [];
    	for (id in bodies) { // boolean
      		arrayOfBodies.push(bodies[id]); // bodies indexed by id pushed into array
    	}
    	return arrayOfBodies;
  	}

  	// return array of joint objects for the specified joint
  	this.getJoints = function(joint) {
    	var joints = [];
    	for (id in bodies) {
      		var body = bodies[id];
      		joints.push(body.getJoint(joint));
    	}
    	return joints;
  	}
    
    // return an array of position vector for the specified joint
	this.getPositions = function(joint) {
    	var positions = [];
    	for (id in bodies) {
      		var body = bodies[id];
      		positions.push(body.getPosition(joint));
    	}
    	return positions;
	}

  	// return current population of bodies
  	this.getPop = function() {
    	return pop;
  	}
}