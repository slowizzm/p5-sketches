//  https://www.youtube.com/watch?v=XskMWBXNbp0

let ballProto,
  ballClass;

function setup() {
  createCanvas(400, 400);
  background(13,17,21);

  // Object Prototype - traditional way
  ballProto = new BallProto({ x : 100, y : 100 }, 33);
  
  //ES6 Class - modern way
  ballClass = new BallClass({ x : 300, y : 300 }, 33);
  
  ballProto.display();
  ballClass.display();
  
  //notice what each instance logs
  console.log(ballProto);
  console.log(ballClass);
  
  //Just use the modern convention of using Class
}
