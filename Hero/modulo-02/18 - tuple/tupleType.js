"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let pessoa;
pessoa = ['Vini', 'Cloud Advocate JavaScript', 21];
console.log(pessoa);
let pessoal;
pessoal = ['Vini', 'Cloud Advocate JavaScript', 21];
console.log(pessoal[1]);
let pessoa2 = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log(pessoa2);
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Glaucia', 'Jurema'], [34, 68]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Glaucia', 'Lemos'));
console.log(criarPessoa('Glaucia', 'de Souza', 'Lemos'));
//# sourceMappingURL=tupleType.js.map