/*

load data from a csv file. 

 
 the inside of data looks like a 
 2 column spreadsheet with labels on the left
 and a number on the right side per row
 
 +---------+---------+
 | data-1  |   100   |
 +---------+---------+
 | data-2  |   20    |
 +---------+---------+
 | ...     | ...     |
 +---------+---------+
 | data-20 |   76    |
 +---------+---------+

*/


let dataLoadedFromFile,
  data;

function preload() {
  dataLoadedFromFile = loadTable("data.csv", "csv", "header", _ => {
    data = dataLoadedFromFile.getRows();
    console.log(dataLoadedFromFile);
  });
}

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(40);

  // lets draw our data as a group of bars as
  // a bar graph.

  push();
  translate(50,50);
  noStroke();
  fill(200, 200, 255);

  for (let i = 0; i < data.length; i++) {

    // for each row of data, read the 
    // number-value from the second column:
    // data[i].getNum(1)
    // 
    // i here refers to a number counting from
    // 0 to the max number of elements inside data
    // we can store that number-value inside 
    // variable val
    let val = data[i].getNum(1);

    // now we display each bar based on the 
    // number-value read and store in val
    push();
    // we use i to determine the location for each bar.
    // with i increasing by 1 for each iteration, 
    // bars are moved towards the right.
    // In addition, move the bar slightly downwards 
    // otherwise it is cut off by the top of the canvas.
    translate(i * 15, 100);

    // And finally we draw a single bar
    // notice that the height of the rectangle is
    // determined by the value of variable val
    // also notice that val precedes a minus
    // to make the bar point upwards.
    rect(0, 0, 10, -val);
    pop();
  }
  pop();
}