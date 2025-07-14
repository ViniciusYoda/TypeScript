const regexp6: RegExp = /#([a-f0-9]{3}|[a-f0-9]{6})\b/gi;

const str6: string = "color: #3f3; background-color: #AA00ef; and: #abcd";

const matches6: RegExpMatchArray | null = str.match(regexp6);

if (matches6) {
  alert(matches6.join(', '));  // Saída: "#3f3, #AA00ef"
} else {
  alert("Nenhuma cor hexadecimal válida encontrada.");
}
