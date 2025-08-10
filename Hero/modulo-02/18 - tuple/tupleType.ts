let pessoa: [string, string, number];
pessoa = ['Vini', 'Cloud Advocate JavaScript', 21]
console.log(pessoa)

let pessoal: [string, string, number];
pessoal = ['Vini', 'Cloud Advocate JavaScript', 21]
console.log(pessoal[1]);

let pessoa2: [nome: string, posicao: string, idade: number] = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];

console.log(pessoa2);

let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['Glaucia', 'Jurema'], [34, 68]);
console.log(resultado)

type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome];
}

console.log(criarPessoa('Glaucia', 'Lemos'));
console.log(criarPessoa('Glaucia', 'de Souza', 'Lemos'));