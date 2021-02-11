/*

- Variables
  • Why use a variable?
    - to store a value (number, color, text) to be used later in the code
    - to have one “symbol” that can be used many times in the code
    - variables make the code easier to modify and change
    - variables make the code easier read
  • A variable has two parts, a “name” and a “value”
  • The “name” is used to refer to the “value” within the code

- Data Type 
  • All variables have a “data type”
    - int: integer (1, 42, -9000)
    - float: floating-point number (1.25, -34.748, 54.82737)
    - char: character, a single alphanumeric symbol (‘a’, ‘#’, ‘8’)
    - String: sequence of characters ('hi', 'the quick brown fox...')
    - boolean: true or false
    - color: an RGB, HSL, HSB value created with the color() function
  • Variables are first “declared” then a value can be assigned

- The “assignment operator”
  • The “=” in code is not “equals” or “equality” from K-12 math
  • The “=” is the “assignment operator” and it assigns a value to a variable
  
    let x = 42; // Declare variable x of type integer and assign “42”

- Variable Names
  • The variable “name” can be just about anything you want it to be, except:
    - can’t start with a number or symbol
    - can’t have a name that’s already “taken” by P5, like “width”
  • Name your variables so the naming makes sense to you

- A variable can only be used within the block it was created

*/

let myIntegerVar = 42,
  myFloatVar = 11.11,
  myCharVar = 'g',
  myStringVar = 'some name "ray"',
  myBooleanVar = false;


const myVarArr = [myIntegerVar, myFloatVar, myCharVar, myStringVar, myBooleanVar],
  myObj = {
    semester: 'Spring',
    year: 21
  };


function setup() {
  noCanvas();
  //old way
  console.log('myIntegerVar:' + myIntegerVar);

  //template literal
  console.log(`myIntegerVar: ${myIntegerVar}`);
}