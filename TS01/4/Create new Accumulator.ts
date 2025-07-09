class Accumulator {
  value: number;

  constructor(startingValue: number) {
    this.value = startingValue;
  }

  read(): void {
    const input = prompt('How much to add?', '0');
    const num = Number(input);
    if (!isNaN(num)) {
      this.value += num;
    }
  }
}

const accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
