function getDateAgo(date: Date, days: number): number {
  const dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

// Exemplo de uso
const date = new Date(2015, 0, 2); // 2 de janeiro de 2015

alert(getDateAgo(date, 1));   // 1
alert(getDateAgo(date, 2));   // 31 (dezembro de 2014)
alert(getDateAgo(date, 365)); // 2 (janeiro de 2014)
