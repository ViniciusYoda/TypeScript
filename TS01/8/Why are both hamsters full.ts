// Define an interface for what a Hamster-like object should have
interface HamsterInstance {
  stomach: string[]; // stomach will be an array of strings
  eat(food: string): void; // eat is a method that takes a string and returns nothing
}

class Hamster {
  // The 'stomach' property is initialized for each *instance* of Hamster or its subclasses
  public stomach: string[] = [];

  eat(food: string): void {
    this.stomach.push(food);
  }
}

// Speedy and Lazy are specific types of Hamsters
class SpeedyHamster extends Hamster {
  // No need to redeclare stomach or eat if they are inherited and handled by the parent constructor
}

class LazyHamster extends Hamster {
  // Similarly, no need to redeclare here
}

// Create instances
const speedy: SpeedyHamster = new SpeedyHamster();
const lazy: LazyHamster = new LazyHamster();

// Speedy one found the food
speedy.eat("apple");

// Now check their stomachs
console.log(speedy.stomach); // Output: ["apple"]
console.log(lazy.stomach);   // Output: []

// If you are running this in a browser environment, alert will work:
// alert(speedy.stomach); // Shows "apple"
// alert(lazy.stomach);   // Shows an empty string or nothing, indicating an empty array