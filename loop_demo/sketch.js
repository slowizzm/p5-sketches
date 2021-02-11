/*

- Loops
  . Loops are tricky, but they become clear with practice
  . Loops are used to remove repetitive code
  . Loops can be used to create regular visual patterns


  . Count with loops
    - 0 to 20
    - 0 to 20 counting by 2s
    - 20 to 0

  . Draw with loops
    - Vertical lines, start without loop and convert
      . Think about the coordinates of the lines
        -OR-
      . Think about the # of times to loop
    - Horizontal lines 


  . Draw a grid/matrix with embedded loops
    - Place one loop inside another to multiply the effect
    - If Loop A runs 10 times and Loop B runs 10 times, 
      the code in the embedded Loop AB will run 100 times (10 x 10)

 - Anatomy of the for loop:
  . The “init”, “test”, and “update” all work together to define the number of     
    times statements in the loop will run
  . The “init” defines a variable (e.g. “let i = 0”)
  . The “init” variable is used in the “test” and “update”
  . The “test” is a relational expression that compares the “init” variable to 
    some other value (e.g. “i < 100”)
  . The “update” modifies the init variable (e.g. “i++”)
  . Note the semicolons after the “init” and “test”

      for (init; test; update) {
        // statements
      }

      for (let i = 0; i < 100; i = i + 1) {
        line(i*5, 0, i*5, height);
        console.log(i);
      }

*/

function setup() {
  noCanvas();

  // loop through and console log the value of i 20 times - results in 0-19 in console
  for (let i = 0; i < 20; i++) {
    console.log(i)
  }

  // loop through and console log the value of i 10 times - results in all even numbers 0-18 in console
  for (let i = 0; i < 20; i += 2) {
    console.log(i)
  }
}