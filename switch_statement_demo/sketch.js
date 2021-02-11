/*

- Switch Statement

  The switch statement evaluates an expression, matching the expression's 
  value to a case clause, and executes statements associated with that case, 
  as well as statements in cases that follow the matching case.

        switch (expression) {
            case value1:
              //Statements executed when the
              //result of expression matches value1
              break;
            case value2:
              //Statements executed when the
              //result of expression matches value2
              break;
            case valueN:
              //Statements executed when the
              //result of expression matches valueN
              break;
            default:
              //Statements executed when none of
              //the values match the value of the expression
              break;
          }

*/

const cols = ['#fff2d8', '#fccdd3', '#fca2cf', '#d8f4f6', '#ade1eb'];

let curr_col = cols[0];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(curr_col);
}

function keyPressed(e) {
  // console.log(e.keyCode)

  switch (e.keyCode) {
    case 87:
      curr_col = cols[1];
      break;

    case 65:
      curr_col = cols[2];
      break;

    case 83:
      curr_col = cols[3];
      break;

    case 68:
      curr_col = cols[4];
      break;

    default:
      curr_col = cols[0];
      break;
  }
}