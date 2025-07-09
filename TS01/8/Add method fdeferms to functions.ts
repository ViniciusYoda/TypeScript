// Extend the Function prototype with a 'defer' method

  interface Function {
    defer(ms: number): void;
  }


Function.prototype.defer = function(ms: number): void {
  // Use a fat arrow function to correctly capture 'this' (the function itself)
  setTimeout(() => this(), ms);
};

function f(): void {
  alert("Hello!");
}

f.defer(1000); // Shows "Hello!" after 1 second