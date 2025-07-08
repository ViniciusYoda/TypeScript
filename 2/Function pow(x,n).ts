function pow(x: number, n: number): number {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

const inputX: string | null = '5';
const inputN: string | null = '4';

if (inputX !== null && inputN !== null) {
  const x: number = Number(inputX);
  const n: number = Number(inputN);

  if (isNaN(x) || isNaN(n)) {
    console.log("Please enter valid numbers.");
  } else if (n < 1 || !Number.isInteger(n)) {
    console.log(`Power ${n} is not supported, use a positive integer`);
  } else {
    console.log(pow(x, n));
  }
} else {
  console.log("Canceled by user.");
}

pow(3, 2)
pow(3, 3) 
pow(1, 100) 