const regexp5: RegExp = /<[^<>]+>/g;

const str5: string = '<> <a href="/"> <input type="radio" checked> <b>';

const matches5: RegExpMatchArray | null = str.match(regexp5);

if (matches5) {
  alert(matches5.join(', ')); 
  // Saída: <a href="/">, <input type="radio" checked>, <b>
} else {
  alert("Nenhuma tag encontrada.");
}
