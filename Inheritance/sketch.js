let cat, dog;

function setup() {
 // createCanvas(400, 400);
  cat = new Cat();
  dog = new Dog();
  
  //cat
  print(cat.age);
  cat.meow();
  cat.eat();
  cat.sleep();
  
  //dog
  print(dog.age);
  dog.bark();
  dog.eat();
  dog.sleep();
}


class Animal { 
  constructor() {
    this.age = 0; 
  }
 
 
  eat() {
    print("Omnom!");
  }
 
  sleep() {
    print("ZzzzZ");
  }
}
 

class Cat extends Animal {
  constructor() {
    super();
  }
 
  meow() {
    print("MEOW!");
  }
}
 

class Dog extends Animal {
  constructor() {
    super();
    this.age = 3;
  }
 

  bark() {
    print("WOOF!");
  }
}