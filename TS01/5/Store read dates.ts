type Message2 = {
  text: string;
  from: string;
};

let messages2: Message2[] = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

// WeakMap: chave = objeto (Message), valor = Date (data em que foi lido)
let readMap: WeakMap<Message2, Date> = new WeakMap();

// Marca a mensagem como lida em uma data específica
readMap.set(messages[0], new Date(2017, 1, 1)); // 1 de fevereiro de 2017

// Exemplo: consultar quando a mensagem foi lida
if (readMap.has(messages[0])) {
  alert(`Message 0 was read at: ${readMap.get(messages[0])}`);
}
