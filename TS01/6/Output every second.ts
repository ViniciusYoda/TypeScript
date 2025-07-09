function printNumbers(from: number, to: number): void {
  let current = from;

  let timerId = setInterval(() => {
    alert(current);
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

// Uso:
printNumbers(5, 10);
