const regexp3: RegExp = /#[a-f0-9]{6}/gi;

const str: string = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2";

const matches3: RegExpMatchArray | null = str.match(regexp3);

if (matches3) {
  alert(matches3.join(', ')); // Saída: #121212, #AA00ef, #fddee
} else {
  alert("Nenhuma cor hexadecimal válida encontrada.");
}
