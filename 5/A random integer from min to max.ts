function randomInteger(min: number, max: number): number {
  // Gera número aleatório entre min e max (ambos inclusivos)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomInteger(1, 3));
