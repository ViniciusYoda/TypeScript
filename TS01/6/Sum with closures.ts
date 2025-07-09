function sum1(a: number): (b: number) => number {
  return function(b: number): number {
    return a + b; // "a" é acessado do ambiente léxico externo
  };
}

alert(sum1(1)(2)); // 3
alert(sum1(5)(-1)); // 4
