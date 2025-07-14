const regexp4: RegExp = /<!--[\s\S]*?-->/g;

const str4: string = `... <!-- My -- comment
 test --> ..  <!----> ..`;

const matches4: RegExpMatchArray | null = str.match(regexp4);

if (matches4) {
  alert(matches4.join('\n'));
} else {
  alert("Nenhum comentário encontrado.");
}
