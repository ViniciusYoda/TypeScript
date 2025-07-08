function delay<F extends (...args: any[]) => void>(f: F, ms: number): (...args: Parameters<F>) => void {
  return function(this: any, ...args: Parameters<F>) {
    let savedThis = this; // armazenando 'this' em uma variável intermediária
    setTimeout(function() {
      f.apply(savedThis, args); // usando o 'this' correto aqui
    }, ms);
  };
}

// Exemplo de uso:
function sayHello(name: string): void {
  console.log(`Hello, ${name}!`);
}

let delayedHello = delay(sayHello, 2000);
delayedHello("Alice");  // Exibe "Hello, Alice!" após 2 segundos
