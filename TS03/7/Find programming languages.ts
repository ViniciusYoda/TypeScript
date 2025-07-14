const regexp8: RegExp = /Java(Script)?|C(\+\+)?|PHP/g;

const str8: string = "Java, JavaScript, PHP, C, C++";

const matches8: RegExpMatchArray | null = str.match(regexp8);

if (matches8) {
  alert(matches8.join(', ')); // Saída: Java, JavaScript, PHP, C, C++
} else {
  alert("Nenhum termo encontrado.");
}
