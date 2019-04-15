// must be in HTTPS

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // register event handler to position anytime it changes
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(updatePosition);
  } else {
    alert("navigator.geolocation is not available");
  }
}

function updatePosition(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  background(0);
  fill(255);
  background(0);
  textSize(32);
	textAlign(CENTER);
  text(nf(lat,2,2) + " " + nf(lng,2,2), width*0.5, height*0.5);
}