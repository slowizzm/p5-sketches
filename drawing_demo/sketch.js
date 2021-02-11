/*

- Drawing: Coordinate System, Shapes, & Color

  • The coordinate system
  
  
                       x ---------->                                  
                                              
                     1     2     3     4     5
         (0,0) +-----+-----+-----+-----+-----+
               |     |     |     |     |     |
               |     |     |     |     |     |
             1 +-----+-----+-----+-----+-----+
               |     |     |     |     |     |
        y      |     |     |     |     |     |
        |    2 +-----+-----+-----+-----+-----+
        |      |     |     |     |     |     |
        |      |     |     |     |     |     |
        |    3 +-----+-----+-----+-----+-----+
        |      |     |     |     |     |     |
        |      |     |     |     |     |     |
        v    4 +-----+-----+-----+-----+-----+
               |     |     |     |     |     |
               |     |     |     |     |     |
             5 +-----+-----+-----+-----+-----+ (width,height)
        
        

  The coordinate system for pixels in a computer window differ from the Cartesian coordinate system we may be used to, 
  in contrast to (0,0) being located at the center of the graph, for the p5.js coordinate system, (0,0) can be found at 
  the top left with the positive direction to the right horizontally (x) and down vertically (y).

    •  top left corner of the drawing surface has a coordinate of (0,0). 
    •  bottom right corner is width-1, height-1. where width and height are values set by the createCanvas(); function call in setup().

  Thus, createCanvas(x,y) will create a drawing surface for your sketch x pixels wide, y pixels tall. 
  Each pixel has a coordinate. When you draw, you will use these coordinates to place objects. 
  Depending on what you are drawing and the drawing mode, the coordinate can represent the location 
  of the center of the shape or one of its corners.
  
  
  
- Shapes

  •  P5.js supports a number of functions to help draw different shapes.
  
        line(x1,y1,x2,y2) - draws a line (a direct path between two points) from the first points (x1,y1) to points (x2,y2) 
        
            NOTE: default width of 1 pixel. This width can be modified by using the strokeWeight() function. A line cannot be filled, 
            therefore the fill() function will not affect the color of a line. So to color a line, use the stroke() function.

        ellipse(x,y,w,h) - draws an ellipse at position x,y that is w units wide and h units tall, b units tall.

        rect(x,y,w,h) - draws a rectangle at x,y that is w units wide, h units tall.

        triangle(x1,y1, x2,y2, x3,y3) - draws a triangle where the corners are defined as the three points (x1,y1), (x2,y2) and (x3,y3)

  The order of the drawing depends on the order of the function calls. Each shape is drawn in order. 
  If there should be an overlap, the later shape is drawn over the earlier shape. The order that you 
  draw can have a big impact on what you see so sequencing your instructions correctly is really important.
  
 
 
 for more on coordinate system and shapes, visit https://p5js.org/learn/coordinate-system-and-shapes.html
  
  
  

- Color

  •  Colors in p5.js can be defined in the following manner:

        grayscale (a single number from 0 to 255). 0 is black, 255 is white, all numbers in between are gray. 
        Bigger numbers will make the gray lighter, smaller numbers will make the gray darker.
        
          fill(0) - black
          fill(157) - gray
          fill(255) - white

        RGB defines the values of red (the first number), green (the second number), or blue (the third number). 
        The number 0 signifies no representation of the color and 255 signifies the highest possible concentration of the color. 
        
          fill(255,0,0) - red
          fill(0,255,0) - green
          fill(0,0,255) - blue
          fill(0,0,0) - black
          fill(255,255,255) - white
        
        Hex color codes start with a pound sign or hashtag (#) and are followed by six letters and/or numbers. The first two 
        letters/numbers refer to red, the next two refer to green, and the last two refer to blue. The color values are defined 
        in values between 00 and FF (instead of from 0 to 255 in RGB). 

        Numbers are used when the value is 1-9. Letters are used when the value is higher than 9
        
          fill('#000000') - black
          fill('#ffffff') - white
          fill('#ff0000') - red
          fill('#00ff00') - green
          fill('#0000ff') - blue
          
  for more on color, visit https://p5js.org/learn/color.html

*/


function setup() {
  createCanvas(640, 360);
  background('#f8f8f8');
  strokeWeight(3);
  rectMode(CENTER);

  // border
  rect(width * 0.5, height * 0.5, width * 0.9, height * 0.6);

  //corners

  //top left
  fill('#131721');
  triangle(33, 72, 70, 72, 33, 105);
  //bottom left
  triangle(33, 288, 33, 255, 70, 288);
  //top right
  triangle(608, 72, 608, 105, 571, 72);
  //bottom right
  triangle(608, 288, 571, 288, 608, 255);

  //shape one (left)

  //top half
  fill('#131721');
  arc(width * 0.25, height * 0.5, 110, 110, PI, TWO_PI);

  //bottom half
  noFill();
  arc(width * 0.25, height * 0.5, 110, 110, 0, PI);

  //center
  fill('#f8f8f8');
  ellipse(width * 0.25, height * 0.5, 50, 50)


  //shape two (middle)

  //top half
  fill('#131721');
  arc(width * 0.5, height * 0.5, 110, 110, PI, TWO_PI);

  //bottom half
  noFill();
  arc(width * 0.5, height * 0.5, 110, 110, 0, PI);

  //center
  fill('#f8f8f8');
  ellipse(width * 0.5, height * 0.5, 50, 50)



  //shape three (right)

  //top half
  noFill();
  arc(width * 0.75, height * 0.5, 110, 110, PI, TWO_PI);

  //bottom half
  fill('#131721');
  arc(width * 0.75, height * 0.5, 110, 110, 0, PI);

  //center
  fill('#f8f8f8');
  ellipse(width * 0.75, height * 0.5, 50, 50);


  //connecting line
  line(55, height * 0.5, width * 0.25 - 55, height * 0.5);
  line(width * 0.25 + 55, height * 0.5, width * 0.5 - 55, height * 0.5);
  line(width * 0.5 + 55, height * 0.5, width * 0.75 - 55, height * 0.5);
  line(width * 0.75 + 55, height * 0.5, width - 55, height * 0.5);
}