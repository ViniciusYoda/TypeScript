function ucFirst(str: string): string {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john")); // John
