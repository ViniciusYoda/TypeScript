const salaries: Record<string, number> = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum: number = 0;

for (const key in salaries) {
  sum += salaries[key]; // seguro, pois todos os valores são number
}

console.log(sum); // 390
