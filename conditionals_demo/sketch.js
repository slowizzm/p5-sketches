/*

- Conditionals


                         X                       
                        / \                      
                       /   \                     
                      /     \                    
                    +---------+      +-----+     
                    |condition|  ----+false+----|
                    +---------+      +-----+    |
                      \     /                   |
                       \   /                    |
                        \ /                     |
                         V                      |
                         |                      |
                         |                      |
                     +---+---+                  |
                     | true  |                  |
                     +---+---+                  |
                         |                      |
                         |                      |
                    +----+----+                 |
                    | action  |                 |
                    +----+----+                 |
                         |                      |
                         |                      |
                         |<----------------------
                         |                       
                         |                       
                         |                       
                         v                                            
                        
   
   
  - if statement

      .  Our program will run following steps when executing an if statement

          .  checking condition
          .  if the condition is true, the action statements will execute, then the program will                  keep going with the rest of code after the "if" block
          .  if the condition is false, the program will skip action inside the "if" block and                    continue going with the code after the "if" block. 
          
          if (true) {
            //statements
          }

          
  - if … else statement

          .  If the conditions are true, then the actions in the "if" block will be executed. If the              conditions are false, then the actions in "else" block will be executed.
      
          if (conditions) {
            //statements
          } else {
            //statements
          }


  - if …. else if … else statement

          .  In this flow statement, if the first condition is false, then the program will check                the second condition, and keep going till condition N. If all of the states are false,              then the program will execute the action statement in "else" block. 
      
          if (conditions) {
            //statements
          } else if (conditions) {
            //statements
          } else {
            //statements
          }
          
          
          NOTE: There is no limit to the amount of "else if" statements, but at some point you                 should look at restructuring your code.

          Also, you can nest conditionals. For example ...

          if (conditions) {
              if (conditions) {
              //statements
              } else {
            //statements
          }
   
- Comparison operators

    >           greater

    <           less than

    >=          greater or equal

    <=          less than or equal

    ==          equal

    !=          not equal

    &&          and

    ||          or

    !           not
    
    %           modulo
    
    The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa.
    
        let isOpen = false;
        isOpen = !isOpen;
        console.log(isOpen);

        let isOn = !false;


    The modulo operator, denoted by %, is an arithmetic operator. The modulo division operator produces 
    the remainder of an integer division. 
    
    Syntax: If x and y are integers, then the expression: x % y produces the remainder when x is divided by y.
    
        0 % 5 = 0
        1 % 5 = 1
        2 % 5 = 2
        3 % 5 = 3
        4 % 5 = 4
        5 % 5 = 0
        6 % 5 = 1
        7 % 5 = 2
        8 % 5 = 3
        9 % 5 = 4
        10 % 5 = 0
    

*/



const imgs = [],
  num_imgs = 3;

let state = 0;

function preload() {
  for (let i = 0; i < num_imgs; i++) {
    imgs[i] = loadImage(`images/img${i}.png`, _ => {
      imgs[i].resize(imgs[i].width * 0.65, imgs[i].height * 0.65)
    });
  }
}

function setup() {
  createCanvas(800, 400);
  imageMode(CENTER);
}

function draw() {
  background(255);

  if (state == 0) {
    image(imgs[0], width * 0.5, height * 0.5);
  } else if (state == 1) {
    image(imgs[1], width * 0.5, height * 0.5);
  } else {
    image(imgs[2], width * 0.5, height * 0.5);
  }
}


function mousePressed() {
  state++;

  if (state > 2) {
    state = 0;
  }
  
  // console.log(state)
}