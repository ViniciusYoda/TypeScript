function aclean(arr: string[]): string[] {
  const obj: { [key: string]: string } = {};

  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i]; // sobrescreve anagramas com mesma chave
  }

  return Object.values(obj);
}

const arr6: string[] = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr6));
