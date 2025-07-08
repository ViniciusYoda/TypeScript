type Operation = (a: number, b: number) => number;

class Calculator1 {
  methods: { [key: string]: Operation } = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  calculate(str: string): number {
    let split = str.split(' ');
    let a = +split[0];
    let op = split[1];
    let b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  addMethod(name: string, func: Operation): void {
    this.methods[name] = func;
  }
}
