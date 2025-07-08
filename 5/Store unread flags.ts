type Message = {
  text: string;
  from: string;
};

let messages: Message[] = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

// WeakSet armazena objetos — útil para marcar mensagens lidas
let readMessages: WeakSet<Message> = new WeakSet();

// Marcar duas mensagens como lidas
readMessages.add(messages[0]);
readMessages.add(messages[1]);

// Adicionar novamente a mesma mensagem não duplica
readMessages.add(messages[0]);

// Verifica se a primeira mensagem foi lida
alert("Read message 0: " + readMessages.has(messages[0])); // true

// Remover a primeira mensagem da lista
messages.shift();

// A mensagem ainda está no WeakSet, mas...
// Se não houver mais referências a ela, o garbage collector a removerá do WeakSet automaticamente
