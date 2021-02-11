function setup() {
  createCanvas(400, 400);
  let myClass = new MyClass(myFunc.bind(this, 'arg'));
  myClass.display();
}

function myFunc(e) {
  console.log(e)
}

class MyClass {
  constructor(func) {
    this.func = func;
  }

  display() {
    this.func();
  }
}