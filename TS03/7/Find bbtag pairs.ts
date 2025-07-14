const regexp9: RegExp = /\[(b|url|quote)].*?\[\/\1]/gs;

const str9: string = `
  [b]hello![/b]
  [quote]
    [url]http://google.com[/url]
  [/quote]
`;

const matches9: RegExpMatchArray | null = str.match(regexp9);

if (matches9) {
  alert(matches9.join('\n'));
  // Saída:
  // [b]hello![/b]
  // [quote]
  //   [url]http://google.com[/url]
  // [/quote]
} else {
  alert("Nenhuma tag BBCode encontrada.");
}
