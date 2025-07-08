const map: Map<string, string> = new Map();

map.set("name", "John");

// Converte as chaves para um array
const keys: string[] = Array.from(map.keys());

// Agora podemos usar métodos de array normalmente
keys.push("more");

alert(keys); // "name", "more"
