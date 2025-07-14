function parse(expr: string): [string, string, string] | null {
  const regexp = /(?<a>-?\d+(?:\.\d+)?)\s*(?<operator>[-+*\/])\s*(?<b>-?\d+(?:\.\d+)?)/;

  const result = expr.match(regexp);

  if (result && result.groups) {
    const { a, operator, b } = result.groups;
    return [a, operator, b];
  }

  return null; // Caso não haja correspondência
}

// Testando a função
const parsed = parse("-1.23 * 3.45");

if (parsed) {
  alert(parsed.join(', ')); // Saída: "-1.23, *, 3.45"
} else {
  alert("Expressão inválida.");
}
