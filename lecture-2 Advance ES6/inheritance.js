class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}



class Dog extends Animal {
  constructor(name, age, bread) {
    super(name, age);
    this.bread = bread;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
  age() {
    console.log(`${this.age} years old`);
  }
}



class Cat extends Animal {
  meew() {
    console.log(`${this.name} is meo`);
  }

  constructor(name, age, bread) {
    super(name, age);
    this.bread = bread;
  }
}

const dog1 = new Dog("Viola", 12, "Deshi");
const cat1 = new Cat("Jerry", 3, "Parshiyan");
console.log(dog1);
console.log(cat1);
dog1.eat();
cat1.eat();
