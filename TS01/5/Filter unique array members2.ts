function unique2<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique2(values) ); // Hare, Krishna, :-O