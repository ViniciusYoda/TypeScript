function User(name: string): void {
  this.name = name;
}

User.prototype = {}; // (*)

let user = new (User as any)('John'); // Type assertion to allow 'new User' without a proper constructor type
let user2 = new (user.constructor as any)('Pete');

console.log(user2.name); // undefined