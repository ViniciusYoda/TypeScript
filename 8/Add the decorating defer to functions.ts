// main.ts
// The 'global.d.ts' file makes the 'defer' method available globally for type checking.
Function.prototype.defer = function(ms: number): (...args: any[]) => void {
  const f = this; // Capture the function itself
  return function(this: any, ...args: any[]): void { // Ensure 'this' context is preserved for the returned function
    setTimeout(() => f.apply(this, args), ms);
  };
};

let user3 = {
  name: "John",
  sayHi(this: { name: string }): void { // Explicitly type 'this' for clarity
    alert(this.name);
  }
};

// Assign the deferred function back to sayHi
// TypeScript understands that user.sayHi now returns a function
user3.sayHi = user.sayHi.defer(1000);

user3.sayHi(); // Shows "John" after 1 second