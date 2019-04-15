// body object
var Body = function (body) {
	// create body with id, joints, and timestamp
  	this.id = body.trackingId;

  	// local function for creating Joint objects
  	var createJoints = function () {
    	var joints = [];
    	for (var j = 0; j < body.joints.length; j++) {
      		joints[j] = new Joint(j, body.joints[j]);
    	}
    	return joints;
  	}
  
    var joints = createJoints();
  	var timeStamp = Date.now();

  	// update body joint and timestamp data
  	this.update = function (body) {
    	for (var j = 0; j < body.joints.length; j++) {
      		joints[j].update(body.joints[j]);
      		timeStamp = Date.now();
    	}
  	}

  	// returns joint object for specified joint
  	this.getJoint = function (joint) {
   		return joints[joint];
  	}

  	// returns position vector for specified joint
  	this.getPosition = function (joint) {
    	return joints[joint].pos;
  	}

  	// check to see if body has been updated
  	this.isDead = function () {
    	return Date.now() - timeStamp > death
  	}
}