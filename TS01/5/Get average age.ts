type User3 = {
  name: string;
  age: number;
};

function getAverageAge(users: User3[]): number {
  return users.reduce((total, user) => total + user.age, 0) / users.length;
}

let john3: User3 = { name: "John", age: 25 };
let pete3: User3 = { name: "Pete", age: 30 };
let mary3: User3 = { name: "Mary", age: 29 };

let arr4: User3[] = [john3, pete3, mary3];

alert(getAverageAge(arr4)); // 28
