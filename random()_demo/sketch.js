/*

- Random

  . Return a random floating-point number.

  . Takes either 0, 1 or 2 arguments.

  . If no argument is given, returns a random number from 0 up to (but not including) 1.

  . If one argument is given and it is a number, returns a random number 
    from 0 up to (but not including) the number.

  . If one argument is given and it is an array, returns a random element 
    from that array.

  . If two arguments are given, returns a random number from the first argument 
    up to (but not including) the second argument.


*/

function setup() {
  noCanvas();

  // Default
  console.log(`default - no arguments:  ${random()}`);
  console.log(`default - one argument: ${random(100)}`);
  console.log(`default - two arguments: ${random(1,2)}`);

  // Calculates the closest int value that is less than or equal to the value of the parameter.
  console.log(`floor: ${floor(random(2))}`);

  // Calculates the closest int value that is greater than or equal to the value of the parameter. For example, ceil(9.03) returns the value 10.
  console.log(`ceil: ${ceil(random(13))}`);

  // Converts a boolean, string, or float to its integer representation.
  console.log(`int: ${int(random(2))}`);

  // Calculates the absolute value (magnitude) of a number. The absolute value of a number is always positive.
  console.log(`abs: ${abs(random(2))}`);

  //int() and abs() to remove decimal
  console.log(`int and abs: ${int(abs(random(2)))}`);

  // Calculates the integer closest to the n parameter. For example, round(133.8) returns the value 134. 
  console.log(`round: ${round(random(213.33984578923857893))}`);


  // random with array
  let words = ['apple', 'bear', 'cat', 'dog'];
  console.log(`random element in array version 1: ${random(words)}`);

  console.log(words)

  console.log(`random element in array version 2: ${words[random()]}`);

  // abs() example with a variable
  let x = -42;
  console.log(abs(x))
}