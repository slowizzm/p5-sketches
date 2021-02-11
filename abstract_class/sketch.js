let baseClass, childClass;

function setup() {
  createCanvas(400, 400);

  // baseClass = new BaseClass();
  childClass = new ChildClass();
}

function draw() {
  background(220);
}

class BaseClass {
  constructor() {
    if (this.constructor === BaseClass) {
      throw new TypeError('Abstract class "BaseClass" cannot be instantiated directly.');
    }

    if (this.requiredMethod === undefined) {
      throw new TypeError('Classes extending the abstract class "BaseClass" must contain "requiredMethod()"');
    }
  }
}

class ChildClass extends BaseClass {
  constructor() {
    super();
  }

  // requiredMethod() {}
}