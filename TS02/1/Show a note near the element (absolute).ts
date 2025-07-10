// Retorna as coordenadas absolutas do elemento (relativas ao documento, não à janela)
function getCoords(elem: HTMLElement): { top: number; left: number } {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

// Posiciona `elem` em relação ao `anchor` de acordo com a posição fornecida
function positionAt2(anchor: HTMLElement, position: 'top' | 'right' | 'bottom', elem: HTMLElement): void {
  const anchorCoords = getCoords(anchor);

  switch (position) {
    case 'top':
      elem.style.left = `${anchorCoords.left}px`;
      elem.style.top = `${anchorCoords.top - elem.offsetHeight}px`;
      break;

    case 'right':
      elem.style.left = `${anchorCoords.left + anchor.offsetWidth}px`;
      elem.style.top = `${anchorCoords.top}px`;
      break;

    case 'bottom':
      elem.style.left = `${anchorCoords.left}px`;
      elem.style.top = `${anchorCoords.top + anchor.offsetHeight}px`;
      break;
  }

  elem.style.position = 'absolute'; // necessário para posicionamento funcionar
}

// Cria e exibe uma "nota" HTML posicionada ao redor de um elemento de âncora
function showNote2(anchor: HTMLElement, position: 'top' | 'right' | 'bottom', html: string): void {
  const note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = html;
  note.style.position = 'absolute'; // para garantir o posicionamento
  document.body.append(note);

  positionAt2(anchor, position, note);
}

// Teste com blockquote (deve existir no HTML)
const blockquote2 = document.querySelector('blockquote') as HTMLElement | null;

if (blockquote2) {
  showNote2(blockquote2, 'top', 'note above');
  showNote2(blockquote2, 'right', 'note at the right');
  showNote2(blockquote2, 'bottom', 'note below');
} else {
  console.warn('Elemento <blockquote> não encontrado.');
}
