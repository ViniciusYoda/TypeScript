function sum2(a: number) {
  let currentSum = a;

  function f(b: number): any {
    currentSum += b;
    return f;  // Permite encadeamento
  }

  f.toString = function(): number {
    return currentSum; // Sobrescreve o método toString para retornar o valor final da soma
  };

  return f;
}

alert( sum2(1)(2) ); // 3
alert( sum2(5)(-1)(2) ); // 6
alert( sum2(6)(-1)(-2)(-3) ); // 0
alert( sum2(0)(1)(2)(3)(4)(5) ); // 15
