function getLastDayOfMonth(year: number, month: number): number {
  const date = new Date(year, month + 1, 0); // dia 0 do próximo mês = último dia do mês atual
  return date.getDate();
}

// Exemplos de uso:
alert(getLastDayOfMonth(2012, 0)); // 31 (Janeiro)
alert(getLastDayOfMonth(2012, 1)); // 29 (Fevereiro em ano bissexto)
alert(getLastDayOfMonth(2013, 1)); // 28 (Fevereiro normal)
