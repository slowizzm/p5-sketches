/*

- Why Functions?
  • Modularity
    - Split code into smaller pieces
    - Remove repetitive code
  • Parameters
    - One piece of code can do different things

- Modularity
  • Sketches are no longer continuous lines of code, now they are
    smaller pieces of code that fit together

- Parameters
  • The same piece of code can run in a different way with 
    different variables

- Syntax
  
  • A JavaScript function is defined with the function keyword, 
    followed by a name, followed by parentheses ().

  • Function names can contain letters, digits, underscores, 
    and dollar signs (same rules as variables).

  • The parentheses may include parameter names separated by commas:
    (parameter1, parameter2, ...)

  • The code to be executed, by the function, is placed inside curly brackets: {}
  
- Parameters vs Arguments
  • Parameter is variable defined in function declaration. Argument is 
    the actual value of this variable that get passed to the function
    
      function name(parameter1, parameter2, parameter3) {
        // code to be executed
      }
    
    
- Function Invocation

  • The code inside the function will execute when "something" invokes (calls) the function:

    •  When an event occurs (when a user clicks a button)
    •  When it is invoked (called) from JavaScript code
    •  Automatically (self invoked)

        name(argument1,argument2,argument3);

*/



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#131721');

  myCustomRectangle('#a270f2', {
      x: width * 0.5,
      y: height * 0.5
    }, {
      w: 100,
      h: 200
    },
    [13, 0, 13, 13],
    CENTER);


  myCustomText('hello', width / 2, height / 2, 33, '#f8c828');
  myCustomText('world', width / 2, height * 0.575, 33, '#00c828');

}

// custom rectangle function
function myCustomRectangle(col, pos, res, corners, mode) {
  //col - rectangle color
  //pos - object that holds 2 propeties, x and y, used for rectangle position on canvas
  //res - object that holds 2 propeties, w and h, used for rectangle width and height
  //corners - border radius
  //mode - sets rectMode
  
  rectMode(mode);
  fill(col);
  rect(pos.x, pos.y, res.w, res.h, corners[0], corners[1], corners[2], corners[3]);
}

// custom text function
function myCustomText(txt, x, y, size, col) { 
  //txt - the string of chars you want to display
  //x - location on x-axis
  //y - location on y-axis
  //size - text size
  //col - text color
  
  textAlign(CENTER, CENTER);
  textSize(size);
  fill(col)
  text(txt, x, y)
}