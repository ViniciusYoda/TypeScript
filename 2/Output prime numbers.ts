let n: number = 10;

nextPrime:
for (let i: number = 2; i <= n; i++) {
  for (let j: number = 2; j < i; j++) {
    if (i % j === 0) continue nextPrime; // não é primo, vai para o próximo i
  }

  console.log(i); 
}
