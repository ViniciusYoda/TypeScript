function readNumber(): number | null {
  let input: string | null;
  let num: number;

  do {
    input = prompt("Enter a number please?", "0");
    if (input === null || input.trim() === "") return null;
    num = Number(input);
  } while (!isFinite(num));

  return num;
}

alert(`Read: ${readNumber()}`);
