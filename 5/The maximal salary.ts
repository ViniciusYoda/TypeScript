function topSalary(salaries: { [key: string]: number }): string | null {
  let maxSalary = 0;
  let maxName: string | null = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

const salaries3 = {
  John: 100,
  Pete: 300,
  Mary: 250
};

console.log(topSalary(salaries3)); // Pete