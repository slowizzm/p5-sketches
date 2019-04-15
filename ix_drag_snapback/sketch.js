//WIP

let drag;
let izzm;
let snapBackSlider;
let snapBack, bounce;

function setup() {
  createCanvas(windowWidth, windowHeight);
  izzm = new Izzm(width*0.5,height*0.3,50);
  
  drag = false;

  snapBackSlider = createSlider(1,200,1);
  snapBackSlider.position(width*0.03,height*0.15);
	bounce = createSlider(1,200,1);
  //bounce.position(width*0.03,height*0.15);
}

function draw() {
  snapBack = snapBackSlider.value();
	//bounce = snapBackSlider.value();
  background(217);
  let startPos = createVector(width*0.5, height*0.3);

  fill(0);
  noStroke();
  text("Drag: " + drag, width*0.035, height*0.06);
	text("Return Speed",width*0.05,height*0.145);
	text(snapBackSlider.value(),width*0.2,height*0.145);
  
  if (!drag) {
    izzm.update(1);
    izzm.seek(startPos);
    izzm.arrive(startPos);
  } else {
    izzm.update(0);
  }
    izzm.display();
    //izzm.edges();
}

//touchStaerted on mobile
function mousePressed() {
  let distance = dist(mouseX, mouseY, izzm.pos.x, izzm.pos.y);
  
  // if touching ellipse, start drag
  if(distance < izzm.size) {
	  drag = true;
  } else {
	  drag = false;
  }
}

//touchEnded on mobile
function mouseReleased() {
  drag = false;
}

//touchMoved on mobile
function mouseDragged() {
  if(drag === true) {
    //izzm.pos.x = mouseX;
    izzm.pos.y = mouseY;
  }
}

function Izzm(_x,_y,_size) {
  this.pos = createVector(_x,_y);
  this.vel = createVector(0,-2);
  this.acc = createVector(0,0);
  this.size = _size;
  this.maxspeed;
  this.maxforce = 0.001;

  this.update = function(_v) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(_v);
		this.maxspeed = snapBack;
		
  }

  this.seek = function(target) {
    let desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxspeed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);

    if (desired <=this.size) {
      this.vel.mult(0);
    } else { 
      this.vel.mult(1);
    }

    this.applyForce(steer);  
  }
    
    this.applyForce = function(force) {
    this.acc.add(force);
  }

 this.arrive = function(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    
    if (d < height) {
      let m = map(d, 0, height, 0, this.maxspeed);
      desired.setMag(m);
    } else {
      desired.setMag(this.maxspeed);
    }

    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxspeed);

    if (desired <= this.size) {
      this.vel.mult(0);
    } else { 
      this.vel.mult(1);
    }

    this.applyForce(steer);
  }

  this.display = function() {
    if(drag === true) {
      fill(255);
    } else {
      fill(3,19,3);
    }
      ellipse(this.pos.x, this.pos.y, this.size);
    }

  this.edges = function() {
    if (this.pos.x <= 0 || this.pos.x >= width) {
      this.vel.x *= -1;
    }
    if (this.pos.y <= 0 || this.pos.y >= height) {
      this.pos.y = mouseY;
      this.vel.y *= -1;
    }
  }
}