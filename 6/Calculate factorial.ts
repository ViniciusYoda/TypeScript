function factorial(n: number): number {
  return n ? n * factorial(n - 1) : 1;
}

alert(factorial(5));  // 120
