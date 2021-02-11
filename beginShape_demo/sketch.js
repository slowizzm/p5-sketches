/*

Using the beginShape() and endShape() functions allow creating more complex forms. beginShape() begins recording vertices for a shape and endShape() stops recording. The value of the kind parameter tells it which types of shapes to create from the provided vertices. With no mode specified, the shape can be any irregular polygon.

The parameters available for beginShape() are POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, QUAD_STRIP, and TESS (WebGL only). After calling the beginShape() function, a series of vertex() commands must follow. To stop drawing the shape, call endShape(). Each shape will be outlined with the current stroke color and filled with the fill color.

Transformations such as translate(), rotate(), and scale() do not work within beginShape(). It is also not possible to use other shapes, such as ellipse() or rect() within beginShape().

*/



// loads image from unsplash
let img, url = 'https://images.unsplash.com/photo-1608019709033-4ecbc394f87f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80';

// preload the image - on success of image load we invoke the updateImageSize function aka a callback

//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function preload() {
  img = loadImage(url, updateImageSize);
}

function updateImageSize() {
  img.resize(img.width * 0.45, img.height * 0.45);
  console.log(img);
}


function setup() {
  createCanvas(img.width, img.height);

  fill('#a93498')
  noStroke();
}

function draw() {
  background(220);

  image(img, 0, 0);

  // custom shape
  // vertex points go clockwise
  beginShape();
  vertex(140, 110);
  vertex(182, 150);
  vertex(232, 395);
  vertex(227, 396);
  vertex(143, 344);
  vertex(62, 401);
  vertex(58, 398);
  vertex(99, 150);
  endShape(CLOSE);
}


function mousePressed() {
  console.log(mouseX, mouseY);
}