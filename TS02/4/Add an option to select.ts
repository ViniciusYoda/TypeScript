// 1) Seleciona a opção atualmente escolhida no <select id="genres">
const genres = document.getElementById("genres") as HTMLSelectElement;
const selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);

// 2) Cria e adiciona uma nova opção ao <select>
const newOption = new Option("Classic", "classic");
genres.append(newOption);

// 3) Define a nova opção como selecionada
newOption.selected = true;
