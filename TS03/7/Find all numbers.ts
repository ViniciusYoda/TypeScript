const regexp7: RegExp = /-?\d+(\.\d+)?/g;

const str7: string = "-1.5 0 2 -123.4.";

const matches7: RegExpMatchArray | null = str.match(regexp7);

if (matches7) {
  alert(matches7.join(', ')); // "-1.5, 0, 2, -123.4"
} else {
  alert("Nenhum número encontrado.");
}
