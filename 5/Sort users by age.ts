type Person = {
  name: string;
  age: number;
};

function sortByAge(arr: Person[]): void {
  arr.sort((a, b) => a.age - b.age);
}

let john2: Person = { name: "John", age: 25 };
let pete2: Person = { name: "Pete", age: 30 };
let mary2: Person = { name: "Mary", age: 28 };

let arr3: Person[] = [pete2, john2, mary2];

sortByAge(arr3);

// agora está ordenado: [john, mary, pete]
alert(arr3[0].name); // John
alert(arr3[1].name); // Mary
alert(arr3[2].name); // Pete
