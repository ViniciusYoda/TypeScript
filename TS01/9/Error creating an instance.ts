class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  created: number;

  constructor(name: string) {
    super(name); // Call the parent constructor with 'name'
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit");
alert(rabbit.name); // White Rabbit