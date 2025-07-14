const regexp: RegExp = /\d\d[-:]\d\d/g;

const text: string = "Breakfast at 09:00. Dinner at 21-30";
const matches: RegExpMatchArray | null = text.match(regexp);

if (matches) {
  alert(matches.join(', ')); // Mostra: 09:00, 21-30
} else {
  alert("Nenhum horário encontrado.");
}
