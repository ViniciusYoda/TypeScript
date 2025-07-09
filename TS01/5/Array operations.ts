let styles: string[] = ["Jazz", "Blues"];

styles.push("Rock-n-Roll"); // adiciona ao final: ["Jazz", "Blues", "Rock-n-Roll"]

// substitui o valor do meio por "Classics"
styles[Math.floor((styles.length - 1) / 2)] = "Classics";

// remove o primeiro elemento e mostra: "Jazz"
console.log(styles.shift());

// adiciona ao início: ["Rap", "Reggae", ...]
styles.unshift("Rap", "Reggae");

// Opcional: mostrar resultado final
console.log(styles);
