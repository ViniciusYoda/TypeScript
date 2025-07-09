function sumInput(): number {
  const numbers: number[] = [];

  while (true) {
    const value: string | null = prompt("A number please?", "0");

    if (value === null || value.trim() === "" || !isFinite(+value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

alert(sumInput());
