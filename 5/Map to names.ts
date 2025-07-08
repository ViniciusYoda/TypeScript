type User1 = {
  name: string;
  age: number;
};

let john: User1 = { name: "John", age: 25 };
let pete: User1 = { name: "Pete", age: 30 };
let mary: User1 = { name: "Mary", age: 28 };

let users: User1[] = [john, pete, mary];

let names: string[] = users.map(user => user.name);

alert(names); // John, Pete, Mary
