// Define the interface for a Rabbit instance
interface RabbitInstance {
  name: string;
  sayHi(): void;
}

// Define the constructor function.
// Using a function declaration for a constructor requires careful typing in TypeScript,
// especially for 'this'.
function Rabbit(this: RabbitInstance, name: string): void {
  this.name = name;
}

// Define the sayHi method on the prototype.
// Here, 'this' refers to the instance of Rabbit.
Rabbit.prototype.sayHi = function(this: RabbitInstance): void {
  alert(this.name);
};

let rabbit = new (Rabbit as any)("Rabbit"); // Use 'as any' to simplify constructor call typing

rabbit.sayHi();                        // "Rabbit"

// The following calls will still output "undefined" for 'this.name'
// because 'this' context is not an instance of Rabbit in these cases.
// TypeScript will help you identify these potential issues with stricter checks.
(Rabbit.prototype as any).sayHi();              // "undefined"
(Object.getPrototypeOf(rabbit) as any).sayHi(); // "undefined"
(rabbit as any).__proto__.sayHi();              // "undefined"