function throttle<F extends (...args: any[]) => void>(func: F, ms: number): (...args: Parameters<F>) => void {
  let isThrottled = false;
  let savedArgs: Parameters<F> | undefined;
  let savedThis: any;

  function wrapper(this: any, ...args: Parameters<F>) {
    if (isThrottled) { // (2)
      savedArgs = args;
      savedThis = this;
      return;
    }
    
    isThrottled = true;

    func.apply(this, args); // (1)

    setTimeout(() => {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = undefined;
        savedThis = undefined;
      }
    }, ms);
  }

  return wrapper;
}

// Exemplo de uso:

// Função que simula uma ação, por exemplo, uma requisição de rede
function logAction(action: string) {
  console.log(`Action: ${action}`);
}

// Criando uma versão "throttled" da função logAction, com um intervalo de 1000ms
const throttledLogAction = throttle(logAction, 1000);

// Exemplo de chamada
throttledLogAction("click");
throttledLogAction("mousemove");  // Esta chamada será ignorada, pois o throttling a bloqueia até que passe o intervalo de 1000ms
