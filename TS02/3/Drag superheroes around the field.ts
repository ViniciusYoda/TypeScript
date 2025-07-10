let isDragging: boolean = false;
let dragElement: HTMLElement | null = null;

document.addEventListener('mousedown', function(event: MouseEvent): void {
  // 1. Verificação de nulidade e cast para HTMLElement
  const targetElement = event.target as HTMLElement | null; // event.target pode ser Node | null

  // Se targetElement for null, encerramos a função.
  if (!targetElement) {
    return;
  }

  // Agora que sabemos que targetElement não é null, podemos usar .closest()
  dragElement = targetElement.closest('.draggable');

  if (!dragElement) {
    return; // Não é um elemento arrastável, não faz nada
  }

  event.preventDefault(); // Impede a seleção de texto ou o comportamento de arrastar padrão do navegador

  // Desabilita o dragstart nativo para o próprio elemento arrastável
  dragElement.ondragstart = function(): boolean {
    return false;
  };

  let shiftX: number;
  let shiftY: number;

  // Inicia a operação de arrastar
  startDrag(dragElement, event.clientX, event.clientY);

  // Define os manipuladores onMouseUp e onMouseMove dentro do escopo do mousedown
  // para que eles possam acessar `dragElement`, `shiftX`, `shiftY` e outras variáveis de estado.
  function onMouseUp(event: MouseEvent): void {
    finishDrag();
  }

  function onMouseMove(event: MouseEvent): void {
    moveAt(event.clientX, event.clientY);
  }

  /**
   * Inicializa a operação de arrastar.
   * @param element O HTMLElement sendo arrastado.
   * @param clientX A coordenada X do ponteiro do mouse em relação à viewport.
   * @param clientY A coordenada Y do ponteiro do mouse em relação à viewport.
   */
  function startDrag(element: HTMLElement, clientX: number, clientY: number): void {
    if (isDragging) {
      return; // Impede o início de um novo arrasto se um já estiver em andamento
    }

    isDragging = true;

    // Adiciona os ouvintes de mousemove e mouseup ao documento
    // Isso permite arrastar mesmo que o mouse saia do elemento slider
    document.addEventListener('mousemove', onMouseMove);
    // Usa mouseup específico do elemento para maior robustez
    element.addEventListener('mouseup', onMouseUp);

    // Calcula o deslocamento inicial (distância do ponteiro do mouse até o canto superior esquerdo do elemento)
    const rect: DOMRect = element.getBoundingClientRect();
    shiftX = clientX - rect.left;
    shiftY = clientY - rect.top;

    // Define a posição do elemento como 'fixed' para arrastar em relação à viewport
    element.style.position = 'fixed';
    element.style.zIndex = '1000'; // Traz para a frente durante o arrasto

    // Posiciona o elemento nas coordenadas iniciais do mouse
    moveAt(clientX, clientY);
  }

  /**
   * Finaliza a operação de arrastar.
   */
  function finishDrag(): void {
    if (!isDragging) {
      return; // Se não estiver arrastando, não faz nada
    }

    isDragging = false;

    // Converte a posição do elemento de 'fixed' para 'absolute'
    // Ajusta 'top' pela posição de rolagem atual para manter seu lugar visual no documento
    if (dragElement) { // Garante que dragElement não seja null
      const currentTopPx: string = dragElement.style.top;
      const currentTop: number = parseInt(currentTopPx, 10);
      dragElement.style.top = (currentTop + window.pageYOffset) + 'px';
      dragElement.style.position = 'absolute';
      dragElement.style.zIndex = ''; // Redefine o z-index
    }

    // Remove os ouvintes de evento que foram adicionados para arrastar
    document.removeEventListener('mousemove', onMouseMove);
    if (dragElement) {
      dragElement.removeEventListener('mouseup', onMouseUp);
    }
    dragElement = null; // Limpa a referência de dragElement
  }

  /**
   * Move o elemento arrastável para as coordenadas do cliente especificadas.
   * Inclui lógica para rolagem automática se o elemento for para perto das bordas da janela.
   * @param clientX A coordenada X do ponteiro do mouse em relação à viewport.
   * @param clientY A coordenada Y do ponteiro do mouse em relação à viewport.
   */
  function moveAt(clientX: number, clientY: number): void {
    if (!dragElement) return; // Garante que dragElement não seja null

    // Calcula as novas coordenadas relativas à janela para o canto superior esquerdo do elemento
    let newX: number = clientX - shiftX;
    let newY: number = clientY - shiftY;

    // --- Lógica de Rolagem Vertical ---
    const documentClientHeight = document.documentElement.clientHeight;
    const dragElementOffsetHeight = dragElement.offsetHeight;

    // Verifica se a parte inferior do elemento está abaixo da borda inferior da janela
    let newBottom: number = newY + dragElementOffsetHeight;
    if (newBottom > documentClientHeight) {
      // Calcula o valor de rolagem: mínimo da distância restante ou 10px
      let docBottom: number = document.documentElement.getBoundingClientRect().bottom;
      let scrollY: number = Math.min(docBottom - newBottom, 10);

      // Garante que scrollY não seja negativo devido a erros de precisão
      if (scrollY < 0) {
        scrollY = 0;
      }

      // Rola a janela para baixo
      window.scrollBy(0, scrollY);

      // Limita newY para permanecer dentro da altura do cliente do documento
      newY = Math.min(newY, documentClientHeight - dragElementOffsetHeight);
    }

    // Verifica se a parte superior do elemento está acima da borda superior da janela
    if (newY < 0) {
      // Calcula o valor de rolagem: mínimo da distância do topo ou 10px
      let scrollY: number = Math.min(-newY, 10);

      // Garante que scrollY não seja negativo devido a erros de precisão
      if (scrollY < 0) {
        scrollY = 0;
      }

      // Rola a janela para cima
      window.scrollBy(0, -scrollY);

      // Limita newY para permanecer em ou acima de 0
      newY = Math.max(newY, 0);
    }

    // --- Lógica de Limitação Horizontal ---
    const documentClientWidth = document.documentElement.clientWidth;
    const dragElementOffsetWidth = dragElement.offsetWidth;

    // Limita newX para permanecer dentro da borda esquerda da janela
    if (newX < 0) {
      newX = 0;
    }
    // Limita newX para permanecer dentro da borda direita da janela
    if (newX > documentClientWidth - dragElementOffsetWidth) {
      newX = documentClientWidth - dragElementOffsetWidth;
    }

    // Aplica as novas posições calculadas
    dragElement.style.left = newX + 'px';
    dragElement.style.top = newY + 'px';
  }
});