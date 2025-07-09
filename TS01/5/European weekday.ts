function getLocalDay(date: Date): number {
  let day = date.getDay();

  if (day === 0) {
    day = 7; // Domingo vira 7 (padrão europeu)
  }

  return day;
}
