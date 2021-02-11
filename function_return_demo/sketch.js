let p = 'ray'
/*

- Function Return

  • When JavaScript reaches a return statement, the       
    function will stop executing.

  • If the function was invoked from a statement,         
    JavaScript will "return" to execute the code after     
    the invoking statement.

  • Functions often compute a return value. The return     
    value is "returned" back to the "caller":

*/
let value = 0;


function setup() {
  createCanvas(400, 400);

  let val = random();
  let state = false;

  // updateValue(val);




  // console.log(val);

  // console.log(getRandomInt(100));
  // console.log(getRandomFloat(100));
  // console.log(getObject(p));
  console.log(isOn(state));


  // textSize(100)
  // text(getObject('ray').name,100,100)

}

//void
function updateValue(val) {
  value = val;
}

//int
function getRandomInt(val) {
  return int(random(val));
}

//float
function getRandomFloat(val) {
  return random(val);
}

//object
function getObject(n) { // n is a string to pass to our name property
  return {
    name: n
  }
}

//bool
function isOn(state) {
  return state;
}