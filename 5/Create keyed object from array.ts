type User5 = {
  id: string;
  [key: string]: any; // permite outras propriedades além de `id`
};

function groupById(array: User5[]): Record<string, User5> {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {} as Record<string, User5>);
}


const users2: User5[] = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 }
];

const grouped = groupById(users2);

console.log(grouped);