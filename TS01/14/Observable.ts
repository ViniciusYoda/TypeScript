// 1. Define the Symbol for handlers to ensure it's unique and private-like
const handlersSymbol = Symbol('handlers');

// 2. Define the type for the observable object.
// It's an intersection of the original object type T and the new observable capabilities.
type Observable<T extends object> = T & {
  [handlersSymbol]: Array<(key: string | symbol, value: any) => void>;
  observe(handler: (key: string | symbol, value: any) => void): void;
};

/**
 * Makes an object observable by wrapping it in a Proxy.
 * Changes to properties will trigger registered handlers.
 * @param target The object to make observable.
 * @returns A Proxy object that is observable.
 */
function makeObservable<T extends object>(target: T): Observable<T> {
  // Initialize handlers store on the target object using the unique Symbol
  // We need to cast 'target' to 'Observable<T>' to correctly add the new properties
  (target as Observable<T>)[handlersSymbol] = [];

  // Add the observe method to the target object.
  // This method allows users to register handler functions.
  (target as Observable<T>).observe = function(
    this: Observable<T>, // Explicitly type 'this' for the observe method
    handler: (key: string | symbol, value: any) => void
  ): void {
    this[handlersSymbol].push(handler);
  };

  // Create and return a Proxy that intercepts 'set' operations
  return new Proxy(target, {
    /**
     * Intercepts property assignments.
     * @param target The original object.
     * @param property The name of the property being set.
     * @param value The new value being assigned to the property.
     * @param receiver The Proxy itself, or an object that inherits from the Proxy.
     * @returns True if the assignment was successful, false otherwise.
     */
    set(
      target: T,
      property: string | symbol,
      value: any,
      receiver: any
    ): boolean {
      // Use Reflect.set to forward the operation to the original object.
      // This ensures standard behavior for property assignment.
      let success = Reflect.set(target, property, value, receiver);

      // If the property was successfully set, call all registered handlers.
      if (success) {
        // Ensure the target has the handlersSymbol property before trying to iterate.
        // This cast is safe because we added it in makeObservable.
        const handlers = (target as Observable<T>)[handlersSymbol];
        if (handlers) {
          handlers.forEach(handler => handler(property, value));
        }
      }
      return success;
    }
  }) as Observable<T>; // Cast the Proxy result to the Observable type
}

// Example Usage:
// Define a specific type for clarity, though `object` also works
interface MyUser {
  name?: string; // name is optional initially
}

let user2: MyUser = {}; // Start with a plain object conforming to MyUser

// Make the user object observable. The return type will be Observable<MyUser>
const observableUser: Observable<MyUser> = makeObservable(user2);

// Register an observer handler. Note that `observableUser` now correctly
// has the `observe` method according to its type.
observableUser.observe((key, value) => {
  alert(`SET ${String(key)}=${value}`);
});

// Assign a property. This will trigger the observer.
observableUser.name = "John"; // This assignment is now type-checked correctly
// Output: alert with "SET name=John"

// You can still access other properties of the original type
alert(observableUser.name); // John