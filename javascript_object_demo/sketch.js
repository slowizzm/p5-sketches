/*

- Object
  • An object is a collection of related data and/or functionality 
    (which usually consists of several variables and functions — which are called 
    properties and methods when they are inside objects.)

  • An object is made up of one or more members, each of which has a name and a value.
  • Each name/value pair must be separated by a comma, and the name and value in each 
    case are separated by a colon. The syntax always follows this pattern:

        const objectName = {
          city: member1Value,
          member2Name: member2Value,
          member3Name: member3Value
        };

  • Property accessors provide access to an object's properties by using the dot notation 
    or the bracket notation.

        console.log(objectName.memberName);    
        or
        console.log(objectName['city']);

*/

// variable for background color
let col_bg = 0;

// object 
const col = {
  r: 'red',
  g: 'green',
  b: 'blue'
};

// console.log(col['r'])
// console.log(col.g);



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(col_bg);

  updateCol('b');
}

// update the value of col_bg - showing an example of when to use bracket notation over dot notation
function updateCol(c) {
  col_bg = col['b'];
}