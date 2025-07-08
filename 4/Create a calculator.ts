type Calculator = {
  a: number;
  b: number;
  read: () => void;
  sum: () => number;
  mul: () => number;
};

let calculator: Partial<Calculator> = {
  read() {
    this.a = Number(prompt('a?', '0')) || 0;
    this.b = Number(prompt('b?', '0')) || 0;
  },

  sum() {
    return (this.a ?? 0) + (this.b ?? 0);
  },

  mul() {
    return (this.a ?? 0) * (this.b ?? 0);
  }
};

calculator.read?.();
alert(calculator.sum?.());
alert(calculator.mul?.());
