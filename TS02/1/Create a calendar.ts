function createCalendar(elem: HTMLElement, year: number, month: number): void {
  const mon = month - 1; // meses em JS são de 0 a 11
  const d = new Date(year, mon);

  let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';

  // Espaços antes do primeiro dia do mês
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  // Dias reais do mês
  while (d.getMonth() === mon) {
    table += `<td>${d.getDate()}</td>`;

    if (getDay(d) % 7 === 6) {
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  // Espaços após o último dia do mês
  if (getDay(d) !== 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  elem.innerHTML = table;
}

function getDay(date: Date): number {
  let day = date.getDay();
  if (day === 0) day = 7; // transforma domingo (0) em último dia da semana
  return day - 1;
}

// Supondo que há um elemento com ID "calendar"
const calendar = document.getElementById('calendar');
if (calendar) {
  createCalendar(calendar, 2012, 9);
}
