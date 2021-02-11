//fn declaration
// function add(x, y) {
//   return x + y;
// }

//fn expression
// const add = function(x, y) {
//   return x + y;
// }


//arrow fn more than one parameter - multiline
const squareEachArgThenAdd = (x, y) => {
  x = Math.pow(x, 2);
  y = Math.pow(y, 2);
  return x + y;
}


//arrow fn with more than one parameter - one line so we can ommit the curly brackets and the return keyword
const add = (x, y) => x + y;

//arrow fn with one paramenter
const sqrRt = x => x = Math.pow(x, 2);

//arrow fn no parameters
const logSomething = _ => console.log('logged');

console.log(`square each argument then add: ${squareEachArgThenAdd(3, 3)}`);
console.log(`add arguments: ${add(3, 3)}`);
console.log(`square root: ${sqrRt(3)}`);
logSomething();