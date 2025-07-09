// Define an interface for the dictionary's structure,
// including its custom toString method.
interface Dictionary {
  [key: string]: any; // Allows arbitrary string keys with any value
  toString(): string; // Declares the custom toString method
}

// Create the dictionary using Object.create(null) to avoid prototype chain
// and define the toString property directly.
let dictionary: Dictionary = Object.create(null, {
  toString: {
    value(): string { // Type the value as a function returning a string
      return Object.keys(this).join();
    }
  }
});

// Assign properties
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // This property will be directly on the object, not its prototype

// Iterate and alert keys
for (let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// Alert the result of the custom toString method
alert(dictionary); // "apple,__proto__"