function sumSalaries(salaries: { [key: string]: number }): number {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}

const salaries2 = {
  John: 100,
  Ann: 160,
  Pete: 390
};

console.log(sumSalaries(salaries2)); // 650
