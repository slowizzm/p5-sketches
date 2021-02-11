/*

- Transformations

    Transformations apply to everything that happens after and subsequent 
    calls to the function accumulates the effect. For example, calling rotate(HALF_PI) 
    and then rotate(HALF_PI) is the same as rotate(PI). All tranformations are reset 
    when draw() begins again.


- push() / pop()

    The push() function saves the current drawing style settings and transformations, 
    while pop() restores these settings. Note that these functions are always used together.


- translate()

    allows objects to be moved to any location within the window. The first parameter sets the 
    x-axis offset and the second parameter sets the y-axis offset.

- rotate()

    Rotates a shape by the amount specified by the angle parameter. This function accounts 
    for angleMode, so angles can be entered in either RADIANS or DEGREES.

    Objects are always rotated around their relative position to the origin and 
    positive numbers rotate objects in a clockwise direction. 


- scale()

    Increases or decreases the size of a shape by expanding or contracting vertices. 
    Objects always scale from their relative origin to the coordinate system. 
    Scale values are specified as decimal percentages. 
    
    For example, the function call scale(2.0) increases the dimension of a shape by 200%.

*/

const transformProps = {
  x: 200,
  y: 200,
  angle: 0,
  scl: 0.5
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#f2f2f2');

  // move the origin to the pivot point
  translate(transformProps.x, transformProps.y);

  // then rotate the grid around the pivot point
  rotate(transformProps.angle);

  // and draw the square at the origin
  fill('#131767');
  rect(0, 0, 100, 100);

  //push and pop so we can apply scale only to the shape wrapped by the two functions
  push();
  scale(transformProps.scl);
  //apply 200px offset to the x and y
  fill('#671713')
  rect(200, 200, 100, 100);

  pop();



  transformProps.angle += 0.01
}