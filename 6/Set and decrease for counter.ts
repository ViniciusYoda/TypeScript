function makeCounter() {
  let count: number = 0;

  function counter(): number {
    return count++;
  }

  // Método para definir o valor do contador
  counter.set = (value: number): void => {
    count = value;
  };

  // Método para diminuir o contador
  counter.decrease = (): void => {
    count--;
  };

  return counter;
}
