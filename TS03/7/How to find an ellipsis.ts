const regexp2: RegExp = /\.{3,}/g;

const text2: string = "Hello!... How goes?.....";
const matches2: RegExpMatchArray | null = text2.match(regexp2);

if (matches2) {
  alert(matches2.join(', ')); // Saída: "...", "....."
} else {
  alert("Nenhum trecho encontrado.");
}
