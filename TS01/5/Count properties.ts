function count2(obj: object): number {
  return Object.keys(obj).length;
}

const user2 = {
  name: "John",
  age: 30
};

console.log(count2(user2)); // 2
