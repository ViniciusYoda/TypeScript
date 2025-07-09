interface User {
  name: string;
  // If you expect other properties to be added dynamically,
  // you might consider an index signature:
  // [key: string]: any;
}

function wrap<T extends object>(target: T): T {
  return new Proxy(target, {
    get(target: T, prop: string | symbol, receiver: any): any {
      // Check if the property exists directly on the target object
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      } else {
        throw new ReferenceError(`Property doesn't exist: "${String(prop)}"`);
      }
    }
  }) as T; // Type assertion to ensure the Proxy return type matches T
}

let user: User = {
  name: "John"
};

user = wrap(user);

alert(user.name); // John
// The following line will throw a ReferenceError, as expected:
// alert((user as any).age); // Using 'as any' to bypass TypeScript's compile-time check for demo