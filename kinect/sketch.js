let kinectron = null;
let bm = new BodyManager();
let death = 1000;

function setup() {
    createCanvas(windowWidth, windowHeight);
    kinectron = new Kinectron('192.168.0.10');
    kinectron.makeConnection();
    kinectron.startTrackedBodies(bodyTracked);
    background(0);
}

function draw() {
    background(0);

    let positionsArray = [];
    let jointsArray = [];
    positionsArray = grabAllPositions(positionsArray);
    // console.log(positionsArray.length);

    if (bm.getPop() > 0) {
        let bodies = bm.getBodies(); //array of bodies

      	for (var i = 0 ; i < bodies.length ; i++) { //for each body get all joints
            let body =bodies[i];
            let joints = body.getJoints;
            // positionsArray;
        }

        // console.log(positionsArray);
        for (let p = 0; p < positionsArray.length; p++) {

            for (let j = 0; j < positionsArray[p].length; j++) {
                let joint = positionsArray[p][j];
                let pos = getPos(joint);
                // ellipse(pos.x, pos.y, 5, 5);

                for (let k = 0; k < positionsArray.length; k++) {
                    // console.log(positionsArray[p])

                    for(let m = 0; m < positionsArray[k].length; m++) {
                        getDistance(pos, getPos(positionsArray[k][m]));
                    }
                }
            }
        }
    }
}

function grabAllPositions(positionsArray) {
    let headPositions = bm.getJoints(kinectron.HEAD);
    positionsArray.push(headPositions);
    let head = bm.getJoints(kinectron.HEAD);
    positionsArray.push(head);
    let neck = bm.getJoints(kinectron.NECK);
    positionsArray.push(neck);
    let spineShoulder = bm.getJoints(kinectron.SPINESHOULDER);
    positionsArray.push(spineShoulder);
    let spineMid = bm.getJoints(kinectron.SPINEMID);
    positionsArray.push(spineMid);
    let spineBase = bm.getJoints(kinectron.SPINEBASE);
    positionsArray.push(spineBase);
    let shoulderRight = bm.getJoints(kinectron.SHOULDERRIGHT);
    positionsArray.push(shoulderRight);
    let elbowRight = bm.getJoints(kinectron.ELBOWRIGHT);
    positionsArray.push(elbowRight);
    let wristRight = bm.getJoints(kinectron.WRISTRIGHT);
    positionsArray.push(wristRight);
    let handRight = bm.getJoints(kinectron.HANDRIGHT);
    positionsArray.push(handRight);
    let handTipRight = bm.getJoints(kinectron.HANDTIPRIGHT);
    positionsArray.push(handTipRight);
    let thumbRight = bm.getJoints(kinectron.THUMBRIGHT);
    positionsArray.push(thumbRight);
    let shoulderLeft = bm.getJoints(kinectron.SHOULDERLEFT);
    positionsArray.push(shoulderLeft);
    let elbowLeft = bm.getJoints(kinectron.ELBOWLEFT);
    positionsArray.push(elbowLeft);
    let wristLeft = bm.getJoints(kinectron.WRISTLEFT);
    positionsArray.push(wristLeft);
    let handLeft = bm.getJoints(kinectron.HANDLEFT);
    positionsArray.push(handLeft);
    let handTipLeft = bm.getJoints(kinectron.HANDTIPLEFT);
    positionsArray.push(handTipLeft);
    let thumbLeft = bm.getJoints(kinectron.THUMBLEFT);
    positionsArray.push(thumbLeft);
    let hipRight = bm.getJoints(kinectron.HIPRIGHT);
    positionsArray.push(hipRight);
    let kneeRight = bm.getJoints(kinectron.KNEERIGHT);
    positionsArray.push(kneeRight);
    let ankleRight = bm.getJoints(kinectron.ANKLERIGHT);
    positionsArray.push(ankleRight);
    let footRight = bm.getJoints(kinectron.FOOTRIGHT);
    positionsArray.push(footRight);
    let hipLeft = bm.getJoints(kinectron.HIPLEFT);
    positionsArray.push(hipLeft);
    let kneeLeft = bm.getJoints(kinectron.KNEELEFT);
    positionsArray.push(kneeLeft);
    let ankleLeft = bm.getJoints(kinectron.ANKLELEFT);
    positionsArray.push(ankleLeft);
    let footLeft = bm.getJoints(kinectron.FOOTLEFT);
    positionsArray.push(footLeft);

    return positionsArray;
}

function bodyTracked(body) {
    let id = body.trackingId;
    if (!bm.contains(id)) {
        bm.add(body);
    } else {
        bm.update(body);
    }
}

function getPos(joint) {
    // console.log(joint);
    return createVector((joint.pos.x * width / 2) + width / 2, (-joint.pos.y * width / 2) + height / 2);
}

function getDistance(posOne, posTwo) {
    let distance = 150;

    if (distance > dist(posOne.x, posOne.y, posTwo.x, posTwo.y)) {
        // stroke(0, 20);
        stroke(255, 60);
        strokeWeight(1);
        line(posOne.x, posOne.y, posTwo.x, posTwo.y);
    }
}
