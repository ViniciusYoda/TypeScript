function debounce<F extends (...args: any[]) => void>(func: F, ms: number): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return function(this: any, ...args: Parameters<F>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), ms);
  };
}

// Exemplo de uso:

// Função para simular uma requisição de busca
function search(query: string) {
  console.log(`Searching for: ${query}`);
}

// Usando debounce para limitar as chamadas da função search
const debouncedSearch = debounce(search, 1000);

debouncedSearch("apple");  // A busca será executada após 1 segundo sem novas chamadas
debouncedSearch("orange");
debouncedSearch("banana");
