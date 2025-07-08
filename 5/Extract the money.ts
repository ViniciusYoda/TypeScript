function extractCurrencyValue(str: string): number {
  return +str.slice(1);
}

console.log( extractCurrencyValue('$120') === 120 ); // true