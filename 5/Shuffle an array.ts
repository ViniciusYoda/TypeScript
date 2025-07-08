function shuffle<T>(array: T[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Contador de aparições para todas as permutações possíveis
const count: Record<string, number> = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1_000_000; i++) {
  const array: number[] = [1, 2, 3];
  shuffle(array);
  const key = array.join('');
  count[key]++;
}

// Mostra os resultados
for (const key in count) {
  alert(`${key}: ${count[key]}`);
}
